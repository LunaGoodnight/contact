export const ShadowWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      {children}
    </div>
  );
};
