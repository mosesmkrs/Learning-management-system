import React, { useState } from 'react';
import NavBar from '../components/sidebar';
import CourseCard from '../components/CourseCard';
import FilterBar from '../components/FilterBar';

interface Course {
  title: string;
  imageSrc: string;
  level: string;
  category: string;
}

const coursesData: Course[] = [
    { title: 'Mathematics Notes and Guides', imageSrc: '/img/3.jpeg', level: 'Beginner', category: 'Notes' },
    { title: 'Data Structures Project Ideas', imageSrc: '/img/14.jpeg', level: 'Intermediate', category: 'Project' },
    { title: 'Advanced Physics Past Papers', imageSrc: '/img/5.jpeg', level: 'Advanced', category: 'Past Papers' },
    { title: 'Chemistry Lab Video', imageSrc: '/img/9.jpeg', level: 'Beginner', category: 'Video' },
    { title: 'History Study Guides', imageSrc: '/img/4.jpeg', level: 'Intermediate', category: 'Notes' },
    { title: 'Software Development Project', imageSrc: '/img/11.jpeg', level: 'Advanced', category: 'Project' },
    { title: 'Literature Past Year Papers', imageSrc: '/img/10.jpeg', level: 'Expert', category: 'Past Papers' },
    { title: 'Biology Revision Video', imageSrc: '/img/12.jpeg', level: 'Beginner', category: 'Video' },
    { title: 'Economics Study Materials', imageSrc: '/img/6.jpeg', level: 'Intermediate', category: 'Notes' },
    { title: 'Programming Language Project', imageSrc: '/img/1.jpeg', level: 'Advanced', category: 'Project' },
    { title: 'Psychology Past Papers Archive', imageSrc: '/img/2.jpeg', level: 'Expert', category: 'Past Papers' },
    { title: 'Web Development Video Tutorials', imageSrc: '/img/7.jpeg', level: 'Beginner', category: 'Video' },
    { title: 'Statistics Study Guides', imageSrc: '/img/8.jpeg', level: 'Intermediate', category: 'Notes' },
    { title: 'Computer Science Project Ideas', imageSrc: '/img/3.jpeg', level: 'Advanced', category: 'Project' },
    { title: 'English Literature Past Papers', imageSrc: '/img/15.jpeg', level: 'Expert', category: 'Past Papers' },
    { title: 'Physics Practical Video', imageSrc: '/img/4.jpeg', level: 'Beginner', category: 'Video' },
    { title: 'Environmental Science Study Notes', imageSrc: '/img/11.jpeg', level: 'Intermediate', category: 'Notes' },
    { title: 'Machine Learning Project', imageSrc: '/img/5.jpeg', level: 'Advanced', category: 'Project' },
    { title: 'Geography Past Year Papers', imageSrc: '/img/14.jpeg', level: 'Expert', category: 'Past Papers' },
    { title: 'Chemistry Experiment Video', imageSrc: '/img/6.jpeg', level: 'Beginner', category: 'Video' },
    { title: 'Art History Study Materials', imageSrc: '/img/1.jpeg', level: 'Intermediate', category: 'Notes' },
    { title: 'Digital Marketing Project', imageSrc: '/img/10.jpeg', level: 'Advanced', category: 'Project' },
    { title: 'Business Studies Past Papers', imageSrc: '/img/12.jpeg', level: 'Expert', category: 'Past Papers' },
    { title: 'Computer Graphics Video Tutorials', imageSrc: '/img/3.jpeg', level: 'Beginner', category: 'Video' },
    { title: 'Philosophy Study Guides', imageSrc: '/img/2.jpeg', level: 'Intermediate', category: 'Notes' },
    { title: 'Artificial Intelligence Project', imageSrc: '/img/7.jpeg', level: 'Advanced', category: 'Project' },
    { title: 'Sociology Past Year Papers', imageSrc: '/img/8.jpeg', level: 'Expert', category: 'Past Papers' },
    { title: 'History Video Documentaries', imageSrc: '/img/11.jpeg', level: 'Beginner', category: 'Video' },
    { title: 'Microeconomics Study Notes', imageSrc: '/img/15.jpeg', level: 'Intermediate', category: 'Notes' },
    { title: 'Cybersecurity Project', imageSrc: '/img/3.jpeg', level: 'Advanced', category: 'Project' },
    { title: 'Pharmaceutical Past Papers', imageSrc: '/img/4.jpeg', level: 'Expert', category: 'Past Papers' },
    { title: 'Introduction to Programming Video', imageSrc: '/img/1.jpeg', level: 'Beginner', category: 'Video' },
    { title: 'Creative Writing Study Materials', imageSrc: '/img/5.jpeg', level: 'Intermediate', category: 'Notes' },
    { title: 'Network Engineering Project', imageSrc: '/img/10.jpeg', level: 'Advanced', category: 'Project' },
    { title: 'Statistics Past Papers Archive', imageSrc: '/img/12.jpeg', level: 'Expert', category: 'Past Papers' },
    { title: 'Health Science Video Tutorials', imageSrc: '/img/3.jpeg', level: 'Beginner', category: 'Video' },
    { title: 'Media Studies Study Guides', imageSrc: '/img/6.jpeg', level: 'Intermediate', category: 'Notes' },
    { title: 'Game Development Project', imageSrc: '/img/9.jpeg', level: 'Advanced', category: 'Project' },
    { title: 'Political Science Past Year Papers', imageSrc: '/img/14.jpeg', level: 'Expert', category: 'Past Papers' },
    { title: 'Introduction to Economics Video', imageSrc: '/img/8.jpeg', level: 'Beginner', category: 'Video' },
    { title: 'Graphic Design Study Notes', imageSrc: '/img/2.jpeg', level: 'Intermediate', category: 'Notes' },
    { title: 'Software Engineering Project', imageSrc: '/img/7.jpeg', level: 'Advanced', category: 'Project' },
    { title: 'History Exam Past Papers', imageSrc: '/img/11.jpeg', level: 'Expert', category: 'Past Papers' },
    { title: 'Cultural Studies Video Lectures', imageSrc: '/img/3.jpeg', level: 'Beginner', category: 'Video' },
    { title: 'Advanced Mathematics Study Materials', imageSrc: '/img/5.jpeg', level: 'Intermediate', category: 'Notes' },
    { title: 'Web Development Project', imageSrc: '/img/10.jpeg', level: 'Advanced', category: 'Project' },
    { title: 'Literature Exam Past Papers', imageSrc: '/img/4.jpeg', level: 'Expert', category: 'Past Papers' },
    { title: 'Health and Safety Video Tutorials', imageSrc: '/img/12.jpeg', level: 'Beginner', category: 'Video' },
    { title: 'Social Studies Study Guides', imageSrc: '/img/14.jpeg', level: 'Intermediate', category: 'Notes' },
    { title: 'Software Testing Project', imageSrc: '/img/6.jpeg', level: 'Advanced', category: 'Project' },
    { title: 'Philosophy Past Papers Archive', imageSrc: '/img/1.jpeg', level: 'Expert', category: 'Past Papers' },
    { title: 'Physics Experiment Video', imageSrc: '/img/8.jpeg', level: 'Beginner', category: 'Video' },
    { title: 'Advanced Computer Science Study Notes', imageSrc: '/img/11.jpeg', level: 'Intermediate', category: 'Notes' },
    { title: 'Machine Learning Project', imageSrc: '/img/15.jpeg', level: 'Advanced', category: 'Project' }
];


const Home: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredCourses = filter === 'All'
    ? coursesData
    : coursesData.filter(course => course.category.includes(filter));


  return (
    <div className="justify-between md:flex dark:bg-gray-800 dark:text-white">
      <NavBar />
      <div className='border-l border-slate-500'>
        <div className='ml-auto w-fit'>
          <FilterBar selectedFilter={filter} setFilter={setFilter} />
        </div>
      <div className="container p-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredCourses.map(course => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
