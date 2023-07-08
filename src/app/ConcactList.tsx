"use client";

import { useState } from "react";

type SortType = "first_name" | "last_name";

interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  job: string;
  description: string;
}

const sortTypeMap = {
  firstName: "first_name",
  lastName: "last_name",
};
export const ContactList = ({ list }: { list: Contact[] }) => {
  const [data, setData] = useState(list);

  const [sortKey, setSortKey] = useState<null | "first_name" | "last_name">(
    null,
  );
  const [sortOrder, setSortOrder] = useState("asc");

  const sortData = (key: SortType) => {
    let order = "asc";
    if (sortKey === key && sortOrder === "asc") {
      order = "desc";
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
          <th className="flex gap-1">
            <div>First Name</div>
            <div
              className="cursor-pointer p-1 bg-emerald-50 leading-none"
              onClick={() => sortData(sortTypeMap.firstName as SortType)}
            >
              {sortKey === sortTypeMap.firstName && sortOrder === "asc"
                ? "▲"
                : "▼"}
            </div>
          </th>
          <th className="flex gap-1">
            <div>Last Name</div>
            <div className="cursor-pointer p-1 bg-emerald-50 leading-none">
              ↑
            </div>
          </th>
          <th>Job</th>
          <th>Description</th>
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
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
