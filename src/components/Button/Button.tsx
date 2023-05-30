import React, { createRef, forwardRef, useContext, useMemo } from "react";
import { SizeType } from "../Space/Space.tsx";
import classNames from "classnames";
import omit from "rc-util/lib/omit";
import { composeRef } from "rc-util/lib/ref";
import IconWrapper from "./IconWrapper.tsx";

const ButtonTypes = [
  "default",
  "primary",
  "ghost",
  "dashed",
  "link",
  "text",
] as const;
export type ButtonType = (typeof ButtonTypes)[number];

const ButtonShapes = ["default", "circle", "round"] as const;
export type ButtonShape = (typeof ButtonShapes)[number];

const ButtonHTMLTypes = ["submit", "button", "reset"] as const;
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];

export interface BaseButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  shape?: ButtonShape;
  size?: SizeType;
  disabled?: boolean;
  loading?: boolean | { delay?: number };
  className?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  children?: React.ReactNode;
  [key: `data-${string}`]: string;
  classNames?: { icon: string };
  styles?: { icon: React.CSSProperties };
}

export type AnchorButtonProps = {
  href: string;
  target: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & BaseButtonProps &
  Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>,
    "type" | "onClick"
  >;

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick">;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

type Loading = number | boolean;
type LoadingConfigType = {
  loading: boolean;
  delay: number;
};

const InternalButton: React.ForwardRefRenderFunction<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
> = (props, ref) => {
  const {
    htmlType,
    type = "default",
    className,
    children,
    icon,
    disabled: customDisabled,
    size: customSize = "middle",
    shape = "default",
    danger,
    block = false,
    ghost = false,
    ...rest
  } = props;

  // TODO: autoInsertSpaceInButton

  // TODO: DisabledContext from Context

  const mergedDisabled = customDisabled;

  const linkButtonRestProps = omit(rest as ButtonProps & { navigate: any }, [
    "navigate",
  ]); // TODO:

  const sizeFullname = customSize; // TODO: useSize?

  const cn = classNames(
    "inline-block",
    {
      "w-full": block,
    },
    {
      "w-8": shape !== "default" && shape === "circle",
      "px-0": shape !== "default" && shape === "circle",
      "rounded-full": shape !== "default" && shape === "circle",
    },
    {
      "h-8": sizeFullname === "middle",
      "py-1": sizeFullname === "middle",
      "px-4": sizeFullname === "middle",
      "text-sm": sizeFullname === "middle",
    },
    {
      "h-10": sizeFullname === "large",
      "py-1.5": sizeFullname === "large",
      "px-4": sizeFullname === "large",
      "text-base": sizeFullname === "large",
    },
    {
      "h-6": sizeFullname === "small",
      "py-0": sizeFullname === "small",
      "px-2": sizeFullname === "small",
      "text-sm": sizeFullname === "small",
    },
    "rounded-md",
    "shadow-md",
    "transition-all",
    {
      "bg-write border border-slate-300": type === "default",
      "hover:text-blue-600 hover:border-blue-600": type === "default",
      "active:text-blue-600 active:border-blue-600": type === "default", // active 和 hover 的区别
    },
    {
      "bg-blue-600 text-white": !ghost && type === "primary",
      "hover:bg-blue-400": !ghost && type === "primary",
      "active:bg-blue-400": !ghost && type === "primary",
    },
    {
      "bg-write border border-slate-300 border-dashed": type === "dashed",
      "hover:text-blue-600 hover:border-blue-600": type === "dashed",
      "active:text-blue-600 active:border-blue-600": type === "dashed",
    },
    {
      "bg-write shadow-none": type === "text",
      "hover:bg-black/[.06] hover:text-black/[.88]": type === "text",
      "active:bg-black/[.06] hover:text-black/[.88]": type === "text",
    },
    {
      "bg-write text-blue-600 shadow-none": type === "link",
      "hover:text-blue-400": type === "link",
      "active:text-blue-400": type === "link",
    },
    {
      "bg-red-600 text-white": danger && !ghost && type === "primary",
      "hover:bg-red-400": danger && !ghost && type === "primary",
      "bg-white text-red-600 border-red-600":
        danger && !ghost && type !== "primary",
      "hover:text-red-400 hover:border-red-400":
        danger && !ghost && type !== "primary",
      "hover:bg-red-400/[.06]": danger && type === "text",
    },
    {
      "bg-white bg-transparent": ghost,
      "text-blue-600 border border-blue-600 hover:text-blue-400 hover:border-blue-400":
        ghost && !danger && type === "primary",
      "text-white border border-white":
        ghost && (type === "default" || type === "dashed"),
      "bg-white text-red-600 border border-red-600": danger && ghost,
      "hover:text-red-400 hover:border-red-400 hover:bg-transparent":
        danger && ghost,
    },
    {
      "cursor-not-allowed text-gray-400 border-gray-400 bg-gray-300 shadow-none hover:text-gray-400 hover:border-gray-400 hover:bg-gray-300 hover:shadow-none active:text-gray-400 active:border-gray-400 active:bg-gray-300 active:shadow-none":
        mergedDisabled, // hrefAndDisabled 干嘛的？,
    },
    className
  );

  const iconNode = icon && <IconWrapper>{icon}</IconWrapper>;

  const kids = children;

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    const { onClick } = props;
    if (mergedDisabled) {
      e.preventDefault();
      return;
    }
    (
      onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    )?.(e);
  };

  const internalRef = createRef<HTMLButtonElement | HTMLAnchorElement>();
  const buttonRef = composeRef(ref, internalRef); // TODO:

  // TODO: 并不是 link 类型一定会渲染成 a
  // TODO: 设计原则，主按钮在同一个操作区域最多出现一次。
  if (linkButtonRestProps.href !== undefined) {
    return (
      <a
        {...linkButtonRestProps}
        className={cn}
        onClick={handleClick}
        ref={buttonRef as React.Ref<HTMLAnchorElement>}
      >
        {iconNode}
        {kids}
      </a>
    );
  }

  let buttonNode = (
    <button
      {...(rest as NativeButtonProps)}
      type={htmlType}
      className={cn}
      onClick={handleClick}
      disabled={mergedDisabled}
      ref={buttonRef as React.Ref<HTMLButtonElement>}
    >
      {iconNode}
      {kids}
    </button>
  );

  if (true) {
    // TODO: Wave
    // buttonNode = buttonNode;
  }

  // TODO: WrapSSR 是干嘛
  return buttonNode;
};

const Button = forwardRef(InternalButton);

export default Button;
