import {
  CheckCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import { NoticeProps } from "rc-notification/lib/Notice";
import React from "react";
import { Notice } from "rc-notification";

export const TypeIcon = {
  info: <InformationCircleIcon />,
  success: <CheckCircleIcon />,
  error: <XCircleIcon />,
  warning: <InformationCircleIcon />,
  loading: (
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
  ),
};

export interface PureContentProps {
  type?: NoticeType;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function PureContent({ type, icon, children }: PureContentProps) {
  return (
    <div className="px-3 py-2 my-4 bg-white shadow-2xl rounded-lg">
      <span className="anticon text-base inline-block align-text-bottom	me-1">
        {icon || TypeIcon[type!]}
      </span>
      <span className="text-sm">{children}</span>
    </div>
  );
}

export type NoticeType = "info" | "success" | "error" | "warning" | "loading";

export interface PureContentProps {
  type?: NoticeType;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export type PurePanelProps = NoticeProps & PureContentProps;

//  TODO: 所以这是干嘛的
export default function PurePanel(props: PurePanelProps) {
  const { content, type, icon } = props;

  return (
    <Notice
      prefixCls="ant"
      eventKey="pure"
      duration={null}
      content={
        <PureContent type={type} icon={icon}>
          {content}
        </PureContent>
      }
    />
  );
}
