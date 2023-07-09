import { Dispatch, SetStateAction } from "react";

export const InputStyle = ({
  value,
  callback,
}: {
  value: string;
  callback: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <input
      className="p-4 border-2 border-gray-200 outline-0 rounded"
      value={value}
      onChange={(e) => callback(e.target.value)}
    />
  );
};
