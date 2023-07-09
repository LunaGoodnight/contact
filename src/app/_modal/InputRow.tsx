import { Dispatch, SetStateAction } from "react";

interface InputRowProps {
  callback: Dispatch<SetStateAction<string>>;
  value: string;
  title: string;
}

export const InputRow = ({ callback, value, title }: InputRowProps) => {
  return (
    <div className="flex gap-2 p-2 justify-start items-center">
      <div className="w-1/6">{title}</div>
      <input
        className="w-3/6 border-gray-400 border rounded outline-0 p-2"
        type="text"
        value={value}
        onChange={(e) => callback(e.target.value)}
      />
    </div>
  );
};
