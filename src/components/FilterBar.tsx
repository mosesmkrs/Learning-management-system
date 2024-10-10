import React from 'react';

interface FilterBarProps {
  selectedFilter: string;
  setFilter: (filter: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ selectedFilter, setFilter }) => {
  const filters = ['All', 'Project', 'Video', 'Past Papers', 'Notes'];

  return (
    <div className="flex p-4 space-x-4">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`px-4 py-2 rounded-md hover:bg-slate-700 hover:shadow-md hover:shadow-slate-50 hover:font-bold duration-300 ${
            selectedFilter === filter
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-600 dark:text-white'
          }`}
          onClick={() => setFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
