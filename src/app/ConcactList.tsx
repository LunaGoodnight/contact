interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  job: string;
  description: string;
}
export const ContactList = ({ list }: { list: Contact[] }) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="w-1/6">First Name</th>
          <th className="w-1/6">Last Name</th>
          <th className="w-1/6">Job</th>
          <th className="w-3/6">Description</th>
        </tr>
      </thead>
      <tbody>
        {list.map(({ id, first_name, last_name, job, description }) => {
          return (
            <tr key={id} className="flex">
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
