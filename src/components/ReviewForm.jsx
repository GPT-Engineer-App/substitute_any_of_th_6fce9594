import React, { useState } from 'react';

const ReviewForm = () => {
  const [review, setReview] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Review Submitted: ' + review);
    setReview('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="reviewText">Your Review</label>
        <textarea className="form-control" id="reviewText" value={review} onChange={(e) => setReview(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ReviewForm;