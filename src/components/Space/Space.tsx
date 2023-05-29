import React from "react";
import classNames from "classnames";
import Item from "./Item.tsx";
import toArray from "rc-util/lib/Children/toArray";

export const SpaceContext = React.createContext({
  latestIndex: 0,
  horizontalSize: 0,
  verticalSize: 0,
});

// TODO: 这里应该放在 config-provider 中。 https://github.com/ant-design/ant-design/blob/master/components/config-provider/SizeContext.tsx
export type SizeType = "small" | "middle" | "large" | undefined;

export type SpaceSize = SizeType | number;

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  align?: "start" | "end" | "center" | "baseline";
  direction?: "vertical" | "horizontal";
  size?: SpaceSize | [SpaceSize, SpaceSize];
  split?: React.ReactNode;
  wrap?: boolean;
}

const spaceSize = {
  small: 8,
  middle: 16,
  large: 24,
};

function getNumberSize(size: SpaceSize) {
  return typeof size === "string" ? spaceSize[size] : size || 0;
}

const Space = React.forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
  const {
    className,
    direction,
    size = "small", // TODO: 从 context 传递而来
    wrap = false,
    children,
    align,
    split,
    ...otherProps
  } = props;

  const cn = classNames(className, "inline-flex", {
    "flex-col": direction === "vertical",
    "flex-row": direction === "horizontal",
    "items-start": align === "start",
    "items-end": align === "end",
    "items-center": align === "center",
    "items-baseline": align === "baseline",
  });

  // get SpaceSize | [SpaceSize, SpaceSize] 这种类型可以这么预处理一下，后面就只处理一种情况了
  const [horizontalSize, verticalSize] = React.useMemo(
    () =>
      (
        (Array.isArray(size) ? size : [size, size]) as [SpaceSize, SpaceSize]
      ).map((item) => getNumberSize(item)),
    [size]
  );

  const gapStyle: React.CSSProperties = {};

  if (wrap) {
    gapStyle.flexWrap = "wrap";
  }

  // TODO: 官方做了 flex gap 支持的检测
  gapStyle.rowGap = horizontalSize;
  gapStyle.columnGap = verticalSize;

  let latestIndex = 0;
  const childNodes = toArray(children, { keepEmpty: true });
  const nodes = childNodes.map((child, i) => {
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }
    const key = (child && child.key) || `item-${i}`;

    return (
      <Item key={key} index={i} split={split}>
        {child}
      </Item>
    );
  });

  const spaceContext = React.useMemo(
    () => ({
      horizontalSize,
      verticalSize,
      latestIndex,
    }),
    []
  );

  return (
    <div ref={ref} className={cn} style={{ ...gapStyle }} {...otherProps}>
      <SpaceContext.Provider value={spaceContext}>
        {nodes}
      </SpaceContext.Provider>
    </div>
  );
});

export default Space;
