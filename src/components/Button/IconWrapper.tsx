import { forwardRef } from "react";
import classNames from "classnames";

export type IconWrapperProps = {
  children?: React.ReactNode;
};

const IconWrapper = forwardRef<HTMLSpanElement, IconWrapperProps>(
  (props, ref) => {
    const { children } = props;

    const cn = classNames(
      "anticon",
      "inline-flex",
      "items-center",
      "text-inherit",
      "text-center",
      "normal-case",
      "align-[-0.125em]",
      "antialiased",
      "leading-[0]",
      "me-2", // TODO: 后加的
    );
    // TODO: text-rendering 缺失

    return (
      <span ref={ref} className={cn}>
        {children}
      </span>
    );
  }
);

export default IconWrapper;
