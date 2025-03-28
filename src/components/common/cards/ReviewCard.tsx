import React from "react";
import { IoStar } from "react-icons/io5";

interface ReviewCardProps {
  userImage?: string;
  userName: string;
  rating?: number;
  date: string | Date;
  comment: string;
  className?: string;
  fromGoogle?: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  userImage,
  rating,
  date,
  comment,
  userName,
  className,
  fromGoogle = false,
}) => {
  // Default image if userImage is not provided
  const defaultImage = "/profile-image.jpg";
  const displayImage = userImage || defaultImage;

  // Default rating to 5 if not provided
  const displayRating = rating ?? 5;

  // Convert date prop to Date object and format it
  const receivedDate = new Date(date);
  const formattedDate = isNaN(receivedDate.getTime())
    ? "Invalid Date"
    : receivedDate.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      });

  // Generate star icons based on rating
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={
        index < displayRating
          ? "text-3xl text-yellow-500"
          : "text-3xl text-gray-300"
      }
    >
      <IoStar />
    </span>
  ));

  return (
    <div
      className={`flex h-full flex-col items-center justify-center gap-4 rounded-lg border bg-white px-5 py-3.5 sm:px-10 sm:py-7 ${className}`}
    >
      {/* User Image */}
      <img
        width={107}
        height={107}
        src={displayImage}
        alt="User"
        className="mx-auto h-28 w-28 rounded-full object-cover"
      />
      <h5 className="text-center text-xl">{userName}</h5>
      {/* Date */}
      <p className="text-center text-gray-500">{formattedDate}</p>

      {/* Rating Stars */}
      <div className="flex justify-center space-x-1">{stars}</div>

      {/* Comment (if provided) */}
      <p className="w-full flex-grow text-center text-lg">
        {comment.length > 100 ? comment.slice(0, 100) + "..." : comment}
      </p>
      {fromGoogle && (
        <div>
          <img
            alt=""
            src={"/G-icon.svg"}
            width={28}
            height={28}
            className="h-7 w-7"
          />
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
