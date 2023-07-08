"use client";

import { SortType } from "@/type/SortType";
import { sortOrderMap } from "@/config/sortOrderMap";
import { sortKeyMap } from "@/config/sortKeyMap";
import { Contact } from "@/type/Contact";

import { useEffect, useState } from "react";

export const ContactList = ({ list }: { list: Contact[] }) => {
  const [data, setData] = useState(list);

  const [firstNameSort, setFirstNameSort] = useState<null | "asc" | "desc">(
    null,
  );
  const [lastNameSort, setLastNameSort] = useState<null | "asc" | "desc">(null);
  const [sortBy, setSortBy] = useState<null | "first_name" | "last_name">(null);

  const toggleSortStatus = (status: string) =>
    status === "asc" ? "desc" : "asc";

  useEffect(() => {
    if (!sortBy) return;
    const mapSort = {
      first_name: firstNameSort,
      last_name: lastNameSort,
    };
    const sortedArray = [...data].sort((a, b) => {
      const valueA = a[sortBy].toLowerCase();
      const valueB = b[sortBy].toLowerCase();
      return valueA.localeCompare(valueB);
    });

    if (mapSort[sortBy] === sortOrderMap.desc) {
      sortedArray.reverse();
    }
    setData(sortedArray);
  }, [sortBy, firstNameSort, lastNameSort]);
  return (
    <table className="table-auto border border-slate-500 w-full text-left">
      <thead>
        <tr>
          <th>
            <div className="flex gap-1">
              <div>First Name</div>
              <div
                onClick={() => {
                  setFirstNameSort((prev) =>
                    !prev ? "asc" : toggleSortStatus(prev),
                  );
                  setSortBy(sortKeyMap.firstName as SortType);
                }}
              >
                <SortButton
                  active={sortBy === sortKeyMap.firstName}
                  sortOrder={firstNameSort}
                />
              </div>
            </div>
          </th>
          <th>
            <div className="flex gap-1">
              <div>Last Name</div>
              <div
                onClick={() => {
                  setLastNameSort((prev) =>
                    !prev ? "asc" : toggleSortStatus(prev),
                  );
                  setSortBy(sortKeyMap.lastName as SortType);
                }}
              >
                <SortButton
                  active={sortBy === sortKeyMap.lastName}
                  sortOrder={lastNameSort}
                />
              </div>
            </div>
          </th>
          <th>Job</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, first_name, last_name, job, description }) => {
          return (
            <tr key={id}>
              <td>{first_name}</td>
              <td>{last_name}</td>
              <td>{job}</td>
              <td>{description}</td>
              <td>E</td>
              <td>x</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

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
