

const SideBar = () => {

  return (
    <nav className="h-screen p-4 w-fit">
      <div className="container items-center justify-center mx-auto ">
        <h1 className="p-2 text-2xl font-bold text-white">Learning Management System</h1>
        <input
          type="text"
          placeholder="Search for a course"
          className="w-full p-2 rounded-md dark:bg-gray-700 dark:text-white"
        />
      </div>
    </nav>
  );
};

export default SideBar;
