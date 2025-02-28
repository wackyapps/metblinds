import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";

interface RatingCardProps {
  userImage?: string;
  userName: string;
  rating?: number;
  date: string | Date;
  comment: string;
}

const RatingCard: React.FC<RatingCardProps> = ({
  userImage,
  rating,
  date,
  comment,
  userName,
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
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white px-10 py-7 shadow-md">
      {/* User Image */}
      <Image
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
      <p className="text-center text-lg">{comment}</p>
      <div>
        <Image
          alt=""
          src={"/G-icon.svg"}
          width={28}
          height={28}
          className="h-7 w-7"
        />
      </div>
    </div>
  );
};

export default RatingCard;
