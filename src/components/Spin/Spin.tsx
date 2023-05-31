import React, { ReactNode, useMemo, useState } from "react";

const SpinSizes = ["small", "default", "large"] as const;
export type SpinSize = (typeof SpinSizes)[number];
export type SpinIndicator = React.ReactElement<HTMLElement>;

export interface SpinProps {
  className?: string;
  spinning?: boolean;
  style?: React.CSSProperties;
  size?: SpinSize;
  tip?: React.ReactNode;
  delay?: number;
  indicator?: SpinIndicator;
  children?: React.ReactNode;
}

function renderIndicator(props: SpinProps): ReactNode {
  const { indicator } = props;

  if (indicator === null) {
    return null;
  }

  // TODO: sticky 的作用
  return (
    <span className="anticon inline-flex">
      <svg
        className="animate-spin h-5 w-5 text-blue-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </span>
  );
}

const Spin: React.FC<SpinProps> = (props) => {
  const {
    spinning: customSpinning = true,
    delay = 0,
    className,
    size = "default",
    tip,
    style,
    children,
    ...restProps
  } = props;

  const [spinning, setSpinning] = useState(true);

  const isNestedPattern = useMemo(() => {
    return typeof children !== "undefined";
  }, [children]);
  // TODO: tip only work in nest pattern.

  const spinElement: React.ReactNode = (
    <div>
      {renderIndicator(props)}
      {tip && isNestedPattern ? <div>{tip}</div> : null}
    </div>
  );

  if (isNestedPattern) {
    return (
      <div>
        {spinning && <div key="loading">{spinElement}</div>}
        <div key="container">{children}</div>
      </div>
    );
  }

  return spinElement;
};

export default Spin;
