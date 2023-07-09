import { ReactElement } from "react";

export const TdElement = ({
  text = "",
  padding,
}: {
  text?: string | ReactElement;
  padding?: number;
}) => {
  return <td className={`p-${padding} sm:w-auto`}>{text}</td>;
};
