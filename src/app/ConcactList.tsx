"use client";

import { AddContactPanel } from "@/app/AddContactPanel";
import { ContactItem } from "@/app/ContactItem";
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
    <div className="">
      <table className="table-auto w-full text-left rounded-lg bg-gray-300">
        <thead>
          <tr className="border border-b-blue-300">
            <th className="p-3">
              <div className="flex gap-1 items-center">
                <div>First Name</div>
                <div
                  onClick={() => {
                    setLastNameSort(null);
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
            <th className="p-3">
              <div className="flex gap-1 items-center">
                <div>Last Name</div>
                <div
                  onClick={() => {
                    setFirstNameSort(null);
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
            <th className="p-4">Job</th>
            <th className="p-4">Description</th>
            <th className="p-4">Edit</th>
            <th className="p-4">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, ...others }) => {
            return <ContactItem key={id} {...others} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
