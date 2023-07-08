"use client";

import { SortButton } from "@/app/SortButton";
import { sortKeyMap } from "@/config/sortKeyMap";
import { sortOrderMap } from "@/config/sortOrderMap";
import { Contact } from "@/type/Contact";
import { SortType } from "@/type/SortType";

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
