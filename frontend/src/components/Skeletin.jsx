// components/Skeletin.jsx
const Skeletin = () => {
  return (
    <div className="animate-pulse grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-gray-200 rounded-xl p-4 shadow-md">
          <div className="h-48 bg-gray-300 rounded-md mb-4" />
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-300 rounded w-1/2" />
        </div>
      ))}
    </div>
  );
};

export default Skeletin;
