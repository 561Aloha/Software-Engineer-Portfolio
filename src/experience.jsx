import React, { useState, useRef } from 'react';
import './experience.css';

const experienceData = [
  {
    title: 'Digital Marketing Specialist @Made by Dianna',
    date: 'March 2020 - Present',
    shortDescription: 'Specialized in digital marketing strategies and campaign management.',
    description: [
      'Developed user-friendly features for an internal application.',
      'Collaborated with the design team to enhance UI/UX.',
      'Managed code versioning and deployed updates weekly.',
    ],
    badges: ['JavaScript', 'React', 'Netlify'],
  },
  {
    title: 'Online eCommerce Intern @The Estee Lauder Companies',
    date: 'June 2023 - August 2023',
    shortDescription: 'Contributed to the development and management of eCommerce solutions.',
    description: [
      'Developed user-friendly features for an internal application.',
      'Collaborated with the design team to enhance UI/UX.',
      'Managed code versioning and deployed updates weekly.',
    ],
    badges: ['HTML', 'CSS', 'Shopify'],
  },
  {
    title: 'Online eCommerce Intern',
    date: 'June 2023 - August 2023',
    shortDescription: 'Contributed to the development and management of eCommerce solutions.',
    description: [
      'Developed user-friendly features for an internal application.',
      'Collaborated with the design team to enhance UI/UX.',
      'Managed code versioning and deployed updates weekly.',
    ],
    badges: ['HTML', 'CSS', 'Shopify'],
  },
];

function ExperienceItem({ job, isOpen, onClick }) {
  const detailsRef = useRef(null);

  if (!job) {
    return null; // Skip rendering if job data is invalid
  }

  // Safely access `scrollHeight` only when `detailsRef.current` is available
  const detailsHeight = detailsRef.current ? detailsRef.current.scrollHeight : 0;

  return (
    <div className={`experience-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className="experience-summary">
        <h3 className="job-com">{job.title}</h3>
        <p className="job-date">{job.date}</p>
      </div>
      <div
        className="experience-details"
        ref={detailsRef}
        style={{
          maxHeight: isOpen ? `${detailsRef.current?.scrollHeight || 0}px` : '0px',
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 0.5s ease, opacity 0.5s ease',
        }}
      >
        <p className="job-description">{job.shortDescription}</p>
        <ul className="job-duties">
          {job.description.map((duty, index) => (
            <li key={index}>{duty}</li>
          ))}
        </ul>
        <ul className="job-badges">
          {job.badges.map((badge, index) => (
            <li key={index} className="badge">{badge}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  const [openIndex, setOpenIndex] = useState(false);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the clicked item
  };

  if (!experienceData || experienceData.length === 0) {
    return <p>No experience data available.</p>; // Render fallback if no data
  }

  return (
    <div className="experience-container">
      <h2>Hello Experience</h2>
      {experienceData.map((job, index) => (
        <ExperienceItem
          key={index}
          job={job}
          isOpen={openIndex === index} // Ensure only one item is open at a time
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

export default Experience;