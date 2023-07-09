interface SubmitContactProp {
  newContact: {
    contact: {
      first_name: string;
      last_name: string;
      job: string;
      description: string;
    };
  };
}

export const SubmitContact = ({ newContact }: SubmitContactProp) => {
  return (
    <div className="flex justify-end">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </div>
  );
};
