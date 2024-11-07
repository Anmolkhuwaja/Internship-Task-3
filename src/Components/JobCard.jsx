import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';

const JobCard = ({ job }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    console.log(`Job "${job.title}" saved!`);
    Swal.fire({
      icon: 'success',
      title: 'Job Saved!',
      text: `You have saved the job: ${job.title}.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleApply = () => {
    if (isApplied) {
      Swal.fire({
        icon: 'info',
        title: 'Already Applied',
        text: `You have already applied for the job: ${job.title}.`,
        showConfirmButton: true,
      });
    } else {
      setIsApplied(true);
      console.log(`Job "${job.title}" applied!`);
      Swal.fire({
        icon: 'success',
        title: 'Application Submitted',
        text: `You successfully applied for the job: ${job.title}.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '8px', width: '400px' }}>
      <h3>{job.title}</h3>
      <p>Company: {job.company}</p>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        disabled={isSaved}
        style={{ marginRight: '10px' }}
      >
        {isSaved ? 'Saved' : 'Save'}
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleApply}>
        {isApplied ? 'Applied' : 'Apply'}
      </Button>
    </div>
  );
};

export default JobCard;
