import React, {useEffect, useImperativeHandle} from 'react';
import {NoticeType} from "./PurePanel.tsx";
import {render} from "rc-util/lib/React/render";
import useMessage, {useInternalMessage} from "./useMessage.tsx";

export interface MessageType extends PromiseLike<boolean> {
  (): void;
}

export type JointContent = React.ReactNode | ArgsProps;

export type TypeOpen = (
  content: JointContent,
  duration?: number | VoidFunction,
  onClose?: VoidFunction,
) => MessageType;

export interface ArgsProps {
  content: React.ReactNode;
  duration?: number;
  type?: NoticeType;
  onClose?: VoidFunction;
  icon?: React.ReactNode;
  key?: string | number;
  style?: React.CSSProperties;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface MessageInstance {
  info: TypeOpen;
  success: TypeOpen;
  error: TypeOpen;
  warning: TypeOpen;
  loading: TypeOpen;
  open(args: ArgsProps): MessageType;
  destroy(key?: React.Key): void;
}

interface GlobalMessage {
  fragment: DocumentFragment;
  instance?: MessageInstance | null;
  sync?: VoidFunction,
}

let message: GlobalMessage | null = null;
let act: (callback: VoidFunction) => Promise<void> | void = (callback) => callback();


interface OpenTask {
  type: 'open';
  config: ArgsProps;
  resolve: VoidFunction;
  setCloseFn: (closeFn: VoidFunction) => void;
  skipped?: boolean;
}

interface TypeTask {
  type: NoticeType;
  args: Parameters<TypeOpen>;
  resolve: VoidFunction;
  setCloseFn: (closeFn: VoidFunction) => void;
  skipped?: boolean;
}

type Task = OpenTask | TypeTask | { type: 'destroy', key: React.Key, skipped?: boolean };

let taskQueue: Task[] = [];

interface GlobalHolderRef {
  instance: MessageInstance;
  sync: () => void;
}

const GlobalHolder = React.forwardRef<GlobalHolderRef, {}>((_, ref) => {

  const [api, holder] = useInternalMessage({});

  const sync = () => {};
  useEffect(sync, []);

  useImperativeHandle(ref, () => {
    const instance: MessageInstance = { ...api };

    // TODO: any
    Object.keys(instance).forEach((method) => {
      instance[method as keyof MessageInstance] = (...args: any[]) => {
        sync();
        return (api as any)[method](...args);
      };
    });

    return {
      instance,
      sync,
    };
  });

  return (
    <>
      {holder}
    </>
  );
});

function flushNotice() {
  if (!message) {
    const holderFragment = document.createDocumentFragment();
    const newMessage: GlobalMessage = {
      fragment: holderFragment,
    };
    message = newMessage;

    act(() => {
      render(
        <GlobalHolder
          ref={(node) => {
            const { instance, sync } = node || {};
            Promise.resolve().then(() => {
              if (!newMessage.instance && instance) {
                newMessage.instance = instance;
                newMessage.sync = sync;
                flushNotice();
              }
            })
          }}
        />,
        holderFragment,
      )
    });

    return;
  }

  // TODO: Notification not ready.
  if (!message.instance) {
    return;
  }

  taskQueue.forEach((task) => {
    const { type, skipped } = task;

    // TODO:
    // Only `skipped` when user call notice but cancel it immediately
    // and instance not ready
    if (!skipped) {
      switch (type) {
        case "open":
          act(() => {
            const closeFn = message!.instance!.open({
              // TODO: defaultGlobalConfig
              ...task.config,
            })
            closeFn?.then(task.resolve);
            task.setCloseFn(closeFn);
          });
          break;
        case "destroy":
          act(() => {
            message?.instance?.destroy(task.key); // TODO: 可选型
          });
          break;
        default:
          act(() => {
            const closeFn = message!.instance![type](...task.args);
            closeFn?.then(task.resolve);
            task.setCloseFn(closeFn);
          });
      }
    }
  });

  taskQueue = [];
}

function open(config: ArgsProps): MessageType {
  const result = wrapPromiseFn((resolve) => {
    let closeFn: VoidFunction;

    const task: OpenTask = {
      type: 'open',
      config,
      resolve,
      setCloseFn: (fn) => {
        closeFn = fn;
      }
    };

    taskQueue.push(task);

    return () => {
      if (closeFn) {
        act(() => {
          closeFn();
        })
      } else {
        task.skipped = true;
      }
    };
  });

  flushNotice();
  return result;
}

function typeOpen(type: NoticeType, args: Parameters<TypeOpen>): MessageType {
  const result = wrapPromiseFn((resolve) => {
    let closeFn: VoidFunction;

    const task: TypeTask = {
      type,
      args,
      resolve,
      setCloseFn: (fn) => {
        closeFn = fn;
      }
    };

    taskQueue.push(task);

    return () => {
      if (closeFn) {
        act(() => {
          closeFn();
        })
      } else {
        task.skipped = true;
      }
    };
  });

  flushNotice();
  return result;
}

function destroy(key: React.Key) {
  taskQueue.push({
    type: 'destroy',
    key,
  });
  flushNotice();
}

// TODO:
export function wrapPromiseFn(openFn: (resolve: VoidFunction) => VoidFunction) {
  let closeFn: VoidFunction;
  const closePromise = new Promise<boolean>((resolve) => {
    closeFn = openFn(() => {
      resolve(true);
    })
  });

  const result: any = () => {
    closeFn();
  }

  result.then = (filled: VoidFunction, rejected: VoidFunction) => closePromise.then(filled, rejected);
  result.promise = closePromise;

  return result;
}

const baseStaticMethods = {
  open,
  destroy,
  useMessage,
}

interface MessageMethods {
  info: TypeOpen;
  success: TypeOpen;
  error: TypeOpen;
  warning: TypeOpen;
  loading: TypeOpen;
}

const staticMethods = baseStaticMethods as MessageMethods & (typeof baseStaticMethods);

const methods: (keyof MessageMethods)[] = ['success', 'info', 'warning', 'error', 'loading'];

methods.forEach((type: keyof MessageMethods) => {
  staticMethods[type] = (...args: Parameters<TypeOpen>) => typeOpen(type, args);
});

export default staticMethods;
