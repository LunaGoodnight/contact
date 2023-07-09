import { TdElement } from "@/app/_contact/TdElement";

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
  const paddingSize = 4;
  return (
    <tr className="sm:table-row flex flex-wrap sm:p-0 p-2 sm:border-none border-b-gray-300 border-2">
      <TdElement text={first_name} padding={paddingSize} />
      <TdElement text={last_name} padding={paddingSize} />
      <TdElement text={job} padding={paddingSize} />
      <TdElement text={description} padding={paddingSize} />
      <TdElement text={"edit"} padding={paddingSize} />
      <TdElement text={"x"} padding={paddingSize} />
    </tr>
  );
};
