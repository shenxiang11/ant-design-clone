import React from "react";
import {SpaceContext} from "./Space.tsx";

export interface ItemProps {
  children: React.ReactNode;
  index: number;
  direction?: "horizontal" | "vertical";
  split?: React.ReactNode;
  wrap?: boolean;
}

export default function Item({
  index,
  children,
  split,
}: ItemProps) {
  const { latestIndex } = React.useContext(SpaceContext);

  const style: React.CSSProperties = {}; // TODO: 不支持时，才需要

  return (
    <>
      <div style={style}>
        {children}
      </div>
      {
        index < latestIndex && split && (
          <span style={style}>
            {split}
          </span>
        )
      }
    </>
  )
}
