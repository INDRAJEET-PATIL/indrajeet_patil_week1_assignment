import React, { useState } from 'react';
import './FeedbackForm.css';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    //Tasskvalidation
    let validationErrors = {};
    if (!name) validationErrors.name = 'Name is required';
    if (!email) validationErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) validationErrors.email = 'Email is invalid';
    if (!rating) validationErrors.rating = 'Rating is required';
    if (!comments) validationErrors.comments = 'Comments are required';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="feedback-form-container">
      <h2>Customer Feedback Form</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Rating (1-5):</label>
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            {errors.rating && <p className="error">{errors.rating}</p>}
          </div>

          <div className="form-group">
            <label>Comments:</label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
            {errors.comments && <p className="error">{errors.comments}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="submitted-data">
          <h3>Thank you for your feedback!</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Rating:</strong> {rating}</p>
          <p><strong>Comments:</strong> {comments}</p>
        </div>
      )}
    </div>
  );
}

export default FeedbackForm;
