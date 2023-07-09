export const ModalContentWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="relative bg-white rounded-lg shadow translate-y-[-50px] transition-all duration-300 ease-in-out p-4 sm:w-4/6 w-5/6">
      {children}
    </div>
  );
};
