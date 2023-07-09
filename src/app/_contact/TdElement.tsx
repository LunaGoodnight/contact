import { ReactElement } from "react";

export const TdElement = ({
  text = "",
  padding,
  title,
  isFullWidth,
}: {
  text?: string | ReactElement;
  padding?: number;
  title?: string;
  isFullWidth?: boolean;
}) => {
  return (
    <td
      className={`p-${padding} ${
        isFullWidth && "w-full"
      } sm:w-auto sm:table-cell flex flex-col gap-2`}
    >
      {title ? (
        <span className="sm:hidden text-gray-500 text-sm">{title}</span>
      ) : null}
      <span>{text}</span>
    </td>
  );
};
