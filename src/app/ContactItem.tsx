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
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{job}</td>
      <td>{description}</td>
      <td>E</td>
      <td>x</td>
    </tr>
  );
};
