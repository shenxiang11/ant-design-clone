import {NotificationAPI, useNotification as useRcNotification} from "rc-notification";
import React, {useImperativeHandle, useMemo} from "react";
import {ArgsProps, MessageInstance, MessageType, wrapPromiseFn} from "./Message.tsx";
import {NoticeType, PureContent} from "./PurePanel.tsx";
import classNames from "classnames";

const DEFAULT_OFFSET = 8;

interface ConfigOptions {
  top?: number;
  duration?: number;
  getContainer?: () => HTMLElement;
  transitionName?: string;
  maxCount?: number;
}

type HolderProps = ConfigOptions & {
  onAllRemoved?: VoidFunction;
};

type HolderRef = NotificationAPI;

const Holder = React.forwardRef<HolderRef, HolderProps>((props, ref) => {
  const {
    top,
    maxCount,
    duration,
    onAllRemoved,
  } = props;

  const getStyle = () => ({
    top: top ?? DEFAULT_OFFSET,
  });

  // TODO: motion

  // TODO: close icon

  const getClassName = () => classNames(
    'fixed text-center -translate-x-2/4 left-2/4',
  );

  const [api, holder] = useRcNotification({
    prefixCls: 'antclone',
    style: getStyle,
    closable: false,
    duration,
    className: getClassName,
    getContainer: () => document.body,
    maxCount,
    onAllRemoved,
  });

  useImperativeHandle(ref, () => ({
    ...api,
  }));

  return holder;
});

let keyIndex = 0;

export function useInternalMessage(messageConfig?: HolderProps): readonly [MessageInstance, React.ReactElement] { // TODO: ReactNode ? Element?
  const holderRef = React.useRef<HolderRef>(null);

  const wrapAPI = useMemo<MessageInstance>(() => {
    const close = (key: React.Key) => {
      holderRef.current?.close(key);
    }

    const open = (config: ArgsProps): MessageType => {
      if (!holderRef.current) {
        const fakeResult: any = () => {};
        fakeResult.then = () => {};
        return fakeResult;
      }

      const { open: originOpen } = holderRef.current;
      const { content, icon, type, key, onClose, ...restConfig } = config;

      let mergedKey: React.Key = key!;
      if (mergedKey === undefined || mergedKey === null) {
        keyIndex += 1;
        mergedKey = `antd-message-${keyIndex}`;
      }

      return wrapPromiseFn((resolve) => {
        originOpen({
          ...restConfig,
          key: mergedKey,
          content: (
            <PureContent type={type} icon={icon}>
              {content}
            </PureContent>
          ),
          placement: 'top',
          onClose: () => {
            onClose?.();
            resolve();
          },
        });

        return () => {
          close(mergedKey);
        }
      });
    }

    const destroy = (key?: React.Key) => {
      if (key !== undefined) {
        close(key);
      } else {
        holderRef.current?.destroy();
      }
    }

    const clone = {
      open,
      destroy,
    } as MessageInstance;

    const keys: NoticeType[] = ['info', 'success', 'warning', 'error', 'loading'];
    keys.forEach(type => {
      clone[type] = (jointContent, duration, onClose) => {
        let config: ArgsProps;
        if (jointContent && typeof jointContent === 'object' && 'content' in jointContent) {
          config = jointContent;
        } else {
          config = {
            content: jointContent,
          };
        }

        let mergedDuration: number | undefined;
        let mergedOnClose: VoidFunction | undefined;
        if (typeof duration === 'function') {
          mergedOnClose = duration;
        } else {
          mergedDuration = duration;
          mergedOnClose = onClose;
        }

        const mergedConfig = {
          onClose: mergedOnClose,
          duration: mergedDuration,
          ...config,
          type,
        }

        return open(mergedConfig);
      };
    });

    return clone;
  }, []);

  return [wrapAPI, <Holder key="message-holder" {...messageConfig} ref={holderRef} />]
}

export default function useMessage(messageConfig?: ConfigOptions) {
  return useInternalMessage(messageConfig);
}
