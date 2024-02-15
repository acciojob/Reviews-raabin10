import React, { useState } from 'react';

const Review = ({ reviews }) => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = reviews[index];

  const checkIndex = (newIndex) => {
    // Ensure the index is within the bounds of the reviews array
    if (newIndex < 0) {
      return reviews.length - 1;
    } else if (newIndex >= reviews.length) {
      return 0;
    }
    return newIndex;
  };

  const handlePrev = () => {
    setIndex((prevIndex) => checkIndex(prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => checkIndex(prevIndex + 1));
  };

  const handleRandom = () => {
    let randomIndex = index;
    while (randomIndex === index) {
      randomIndex = Math.floor(Math.random() * reviews.length);
    }
    setIndex(randomIndex);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
      </div>
      <h4 id={`author-${index}`} className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePrev}>prev</button>
        <button className="next-btn" onClick={handleNext}>next</button>
      </div>
      <button className="random-btn" onClick={handleRandom}>surprise me</button>
    </article>
  );
};

export default Review;
