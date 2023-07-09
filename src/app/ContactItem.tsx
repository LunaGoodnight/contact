import { TdElement } from "@/app/TdElement";

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
  const paddingSize = 5;
  return (
    <tr>
      <TdElement text={first_name} padding={paddingSize} />
      <TdElement text={last_name} padding={paddingSize} />
      <TdElement text={job} padding={paddingSize} />
      <TdElement text={description} padding={paddingSize} />
      <TdElement text={"edit"} padding={paddingSize} />
      <TdElement text={"x"} padding={paddingSize} />
    </tr>
  );
};
