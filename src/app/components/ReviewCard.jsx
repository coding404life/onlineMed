"use client";

import Image from "next/image";
import React, { useEffect } from "react";

const ReviewCard = ({
  setCurrentReview,
  setIsShuffling,
  currentReview,
  isShuffling,
  reviews,
}) => {
  const shuffleReviews = () => {
    setIsShuffling(true);
    setTimeout(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
      setIsShuffling(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(shuffleReviews, 4000);
    return () => clearInterval(interval);
  }, [shuffleReviews]);

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <Image
        alt="start icon"
        src="star.svg"
        width={18.38}
        height={17.4}
        key={i}
      />
    ));
  };

  const review = reviews[currentReview];

  return (
    <div
      className={`max-w-md bg-white p-4 rounded-xs  transform transition-all duration-300 ${
        isShuffling ? "scale-95 opacity-70" : "scale-100 opacity-100"
      }`}
    >
      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <div
            className={`w-10 h-10 ${review.bgColor} rounded-full flex items-center justify-center`}
          >
            <p className={`${review.textColor} font-bold`}>{review.initials}</p>
          </div>

          <div>
            <p className="font-bold">{review.name}</p>
            <p className="text-gray text-xs">{review.location}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-1">{renderStars(review.rating)}</div>
          <span className="text-gray text-xs">{review.timeAgo}</span>
        </div>

        <p className="tracking-normal leading-6 text-md">{review.text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
