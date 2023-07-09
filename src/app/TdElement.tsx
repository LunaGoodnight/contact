export const TdElement = ({
  text,
  padding,
}: {
  text: string;
  padding: number;
}) => {
  return <td className={`p-${padding}`}>{text}</td>;
};
