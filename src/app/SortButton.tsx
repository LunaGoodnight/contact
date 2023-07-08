import { sortOrderMap } from "@/config/sortOrderMap";

export const SortButton = ({
  active,
  sortOrder,
}: {
  active: boolean;
  sortOrder: string | null;
}) => {
  return (
    <div className="flex flex-col gap-1 cursor-pointer hover:bg-gray-300 p-2">
      {active ? (
        <>
          <div
            className={`w-0 h-0 border-l-[7px] border-r-[7px] border-b-[10px] ${
              sortOrder === sortOrderMap.asc
                ? "border-b-blue-500"
                : "border-b-gray-400"
            } border-r-transparent border-l-transparent`}
          />
          <div
            className={`w-0 h-0 border-l-[7px] border-r-[7px] border-t-[10px] ${
              sortOrder === sortOrderMap.desc
                ? "border-t-blue-500"
                : "border-t-gray-400"
            } border-r-transparent border-l-transparent`}
          />
        </>
      ) : (
        <>
          <div
            className={`w-0 h-0 border-l-[7px] border-r-[7px] border-b-[10px] border-b-gray-400 border-r-transparent border-l-transparent`}
          />
          <div
            className={`w-0 h-0 border-l-[7px] border-r-[7px] border-t-[10px] border-t-gray-400 border-r-transparent border-l-transparent`}
          />
        </>
      )}
    </div>
  );
};
