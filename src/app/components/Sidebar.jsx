"use client";

import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import Image from "next/image";

const reviews = [
  {
    initials: "NP",
    name: "Nick P.",
    location: "Student • New York",
    rating: 5,
    timeAgo: "1 week ago",
    text: "Woke up with severe stomach flu and needed documentation for work. The doctor was thorough, professional, and I had my note in minutes.",
    bgColor: "bg-yellow-400/16",
    textColor: "text-yellow-500",
  },
  {
    initials: "SM",
    name: "Sarah M.",
    location: "Teacher • California",
    rating: 4,
    timeAgo: "3 days ago",
    text: "Amazing service! Got my prescription renewed quickly without having to take time off work. The whole process was seamless and convenient.",
    bgColor: "bg-blue-400/16",
    textColor: "text-blue-500",
  },
  {
    initials: "DJ",
    name: "David J.",
    location: "Engineer • Texas",
    rating: 3,
    timeAgo: "5 days ago",
    text: "Very professional consultation. The doctor listened carefully to my symptoms and provided clear recommendations. Highly recommend!",
    bgColor: "bg-green-400/16",
    textColor: "text-green-500",
  },
];

const Sidebar = ({ setNextStep }) => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);

  const handleReviewChange = (index) => {
    setIsShuffling(true);
    setTimeout(() => {
      setCurrentReview(index);
      setIsShuffling(false);
    }, 150);
  };

  return (
    <aside className="w-full lg:w-6/24 min-h-full p-3.5 mr-1 flex-col justify-between flex">
      <p className="text-lg font-bold">OnlineMed</p>

      <div className="flex flex-col md:gap-4 mt-12">
        <p className="flex gap-1">
          <Image
            src="verified.svg"
            width={20}
            height={20}
            alt="verified icon"
          />
          <span className="text-primary-blue font-bold">
            Money Back Guarantee
          </span>
        </p>

        <p className="text-xl font-bold leading-12 tracking-tight md:w-3/4">
          Your <span className="text-primary-blue">Work</span> Note is Minutes
          Away
        </p>

        <p className="leading-6 tracking-normal">
          Note: Due to capacity we are currently only able to provide a limited
          number of notes per day. To see if you qualify please fill out the
          following short survey!
        </p>
      </div>

      <div className="my-auto flex justify-end sm:hidden">
        <button
          className="bg-primary-blue text-white rounded-lg hover:bg-gray transition cursor-pointer lg:max-w-full  min-w-32 py-3.5 px-2 font-bold"
          onClick={() => setNextStep(true)}
        >
          Next
        </button>
      </div>
      <div className="mt-auto">
        <ReviewCard
          setCurrentReview={setCurrentReview}
          currentReview={currentReview}
          setIsShuffling={setIsShuffling}
          isShuffling={isShuffling}
          reviews={reviews}
        />
      </div>

      <div className="flex gap-2 mt-6">
        {reviews.map((_, index) => (
          <button
            aria-label="review button"
            key={index}
            onClick={() => handleReviewChange(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 text-xs cursor-pointer ${
              index === currentReview
                ? "bg-primary-blue"
                : "bg-primary-blue opacity-30"
            }`}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
