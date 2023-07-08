"use client";

import { useState } from "react";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sortOrderMap } from "@/config/sortOrderMap";
import { sortTypeMap } from "@/config/sortTypeMap";

type SortType = "first_name" | "last_name";

export interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  job: string;
  description: string;
}

export const ContactList = ({ list }: { list: Contact[] }) => {
  const [data, setData] = useState(list);

  const [sortKey, setSortKey] = useState<null | "first_name" | "last_name">(
    null,
  );
  const [sortOrder, setSortOrder] = useState("asc");

  const sortData = (key: SortType) => {
    let order = sortOrderMap.asc;
    if (sortKey === key && sortOrder === sortOrderMap.asc) {
      order = sortOrderMap.desc;
    }

    const sortedArray = [...data].sort((a, b) => {
      const valueA = a[key].toLowerCase();
      const valueB = b[key].toLowerCase();
      return valueA.localeCompare(valueB);
    });

    if (order === "desc") {
      sortedArray.reverse();
    }

    setData(sortedArray);
    setSortKey(key);
    setSortOrder(order);
  };
  return (
    <table className="table-auto border border-slate-500 w-full text-left">
      <thead>
        <tr>
          <th>
            <div className="flex gap-1">
              <div>First Name</div>
              <div
                className="cursor-pointer p-1 bg-emerald-50 leading-none"
                onClick={() => sortData(sortTypeMap.firstName as SortType)}
              >
                {sortKey === sortTypeMap.firstName &&
                sortOrder === sortOrderMap.asc
                  ? "▲"
                  : "▼"}
              </div>
            </div>
          </th>
          <th>
            <div className="flex gap-1">
              <div>Last Name</div>
              <div
                className="cursor-pointer p-1 bg-emerald-50 leading-none"
                onClick={() => sortData(sortTypeMap.lastName as SortType)}
              >
                {sortKey === sortTypeMap.lastName &&
                sortOrder === sortOrderMap.asc ? (
                  <FontAwesomeIcon icon={faSortUp} />
                ) : (
                  <FontAwesomeIcon icon={faSortDown} />
                )}
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
