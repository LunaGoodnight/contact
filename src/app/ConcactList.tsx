interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  job: string;
  description: string;
}
export const ContactList = ({ list }: { list: Contact[] }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Job</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {list.map(({ id, first_name, last_name, job, description }) => {
              return (
                <td key={id} className="flex">
                  <div>{first_name}</div>
                  <div>{last_name}</div>
                  <div>{job}</div>
                  <div>{description}</div>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </>
  );
};
