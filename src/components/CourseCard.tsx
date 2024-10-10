import React from 'react';

interface CourseCardProps {
  title: string;
  imageSrc: string;
  category: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, imageSrc, category }) => {
  return (
    <div className="text-center duration-300 bg-gray-700 rounded-lg shadow-md hover:-translate-y-3 hover:bg-gray-500">
      <img src={imageSrc} alt={title} className="object-cover w-full h-44 rounded-t-md" />
      <span className='pb-2'>
        <h2 className="mt-2 font-semibold text-slate-300 text-md">{title}</h2>
        <small className="text-slate-300">{category}</small>
      </span>
    </div>
  );
};

export default CourseCard;
