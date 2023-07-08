"use client";

import { useState } from "react";

interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  job: string;
  description: string;
}

const sortType = {
  firstName: "firstName",
  lastName: "lastName",
};
export const ContactList = ({ list }: { list: Contact[] }) => {
  const [contactList, setContactList] = useState(list);
  const [firstNameSort, setFirstNameSort] = useState("init");
  const [lastNameSort, setLastNameSort] = useState("init");

  const handleSort = (type: string) => {
    if (type === sortType.lastName) {
      setContactList((prev) => [...prev].sort());
    }
  };

  return (
    <table className="table-auto border border-slate-500 w-full text-left">
      <thead>
        <tr>
          <th className="flex gap-1">
            <div>First Name</div>
            <div
              className="cursor-pointer p-1 bg-emerald-50 leading-none"
              onClick={() => handleSort(sortType.firstName)}
            >
              ↑
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
        {contactList.map(({ id, first_name, last_name, job, description }) => {
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
