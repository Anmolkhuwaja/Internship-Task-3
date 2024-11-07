import React, { useState } from 'react';
import JobCard from './JobCard';

const JobPortal = () => {
  const jobs = [
    { id: 1, title: 'Frontend Developer', company: 'TechCorp' },
    { id: 2, title: 'UI/UX Designer', company: 'DesignPro' },
    { id: 3, title: 'Full Stack Developer', company: 'WebSolutions' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Job Portal</h1>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobPortal;
