export const AddContactModal = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white rounded-lg shadow h-32 translate-y-[-50px] transition-all duration-300 ease-in-out p-6 w-4/6">
        <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
          Add Contact
        </h5>
      </div>
    </div>
  );
};
