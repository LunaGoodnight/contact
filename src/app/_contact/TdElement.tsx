export const TdElement = ({
  text,
  padding,
}: {
  text: string;
  padding: number;
}) => {
  return <td className={`p-${padding} sm:w-auto`}>{text}</td>;
};
