export const ContactItem = ({
  first_name,
  last_name,
  job,
  description,
}: {
  first_name: string;
  last_name: string;
  job: string;
  description: string;
}) => {
  return (
    <tr>
      <td className="p-3">{first_name}</td>
      <td className="p-3">{last_name}</td>
      <td className="p-3">{job}</td>
      <td className="p-3">{description}</td>
      <td className="p-3">E</td>
      <td className="p-3">x</td>
    </tr>
  );
};
