"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./ContactForm.css";
import { twMerge } from "tailwind-merge";

// Define the schema for all fields
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  location: z.string().optional(),
  product: z.string().optional(),
  inquiry: z.string().optional(),
  source: z.string().optional(),
  message: z.string().min(1, "Please enter a valid message"),
});

// Infer TypeScript type from schema
type FormData = z.infer<typeof formSchema>;

export default function ContactForm({
  isSmall,
  className,
}: {
  isSmall?: boolean;
  className?: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data); // Replace with your submission logic (e.g., API call)
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={twMerge(
        `grid w-full grid-cols-1 gap-${isSmall ? "3" : "5"} rounded-lg ${
          isSmall ? "p-3" : "p-4"
        } md:grid-cols-2`,
        className,
      )}
    >
      {/* Your Name Field */}
      <div>
        <label
          htmlFor="name"
          className={`mb-${isSmall ? "2" : "3"} block text-sm text-[#878787]`}
        >
          Your Name:
        </label>
        <input
          id="name"
          placeholder="Enter Your Name*"
          className={`w-full rounded-[23px] bg-[#EFEFEF] ${
            isSmall ? "p-3 text-xs" : "p-4 text-sm"
          }`}
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Your Email Address Field */}
      <div>
        <label
          htmlFor="email"
          className={`mb-${isSmall ? "2" : "3"} block text-sm text-[#878787]`}
        >
          Your Email Address:
        </label>
        <input
          id="email"
          placeholder="Enter Your Email Address*"
          className={`w-full rounded-[23px] bg-[#EFEFEF] ${
            isSmall ? "p-3 text-xs" : "p-4 text-sm"
          }`}
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Choose Your Location Dropdown */}
      <div>
        <label
          htmlFor="location"
          className={`mb-${isSmall ? "2" : "3"} block text-sm text-[#878787]`}
        >
          Choose Your Location:
        </label>
        <select
          id="location"
          className={`w-full rounded-[23px] bg-[#EFEFEF] ${
            isSmall ? "p-3 text-xs" : "p-4 text-sm"
          }`}
          {...register("location")}
        >
          <option value="" disabled hidden>Location</option>
<option value="calgary">Calgary</option>
<option value="cochrane">Cochrane</option>
<option value="airdrie">Airdrie</option>
<option value="red-deer">Red Deer</option>
<option value="okotoks">Okotoks</option>
<option value="medicine-hat">Medicine Hat</option>
<option value="canmore">Canmore</option>
<option value="strathmore">Strathmore</option>

          {/* Add  more location options as needed */}
        </select>
        {errors.location && (
          <p className="mt-1 text-sm text-red-500">{errors.location.message}</p>
        )}
      </div>

      {/* Product of Interest Dropdown */}
      <div>
        <label
          htmlFor="product"
          className={`mb-${isSmall ? "2" : "3"} block text-sm text-[#878787]`}
        >
          Product of Interest:
        </label>
        <select
          id="product"
          className={`w-full rounded-[23px] bg-[#EFEFEF] ${
            isSmall ? "p-3 text-xs" : "p-4 text-sm"
          }`}
          {...register("product")}
        >
          <option value="">Products</option>
<option value="zebra-blinds">Zebra Blinds</option>
<option value="roller-blinds">Roller Blinds</option>
<option value="vertical-blinds">Vertical Blinds</option>
<option value="venetian-blinds">Venetian Blinds</option>
<option value="roman-blinds">Roman Blinds</option>
<option value="wooden-blinds">Wooden Blinds</option>
<option value="motorized-blinds">Motorized Blinds</option>
<option value="outdoor-blinds">Outdoor Blinds</option>
<option value="curtains">Curtains</option>
<option value="window-shades">Window Shades</option>

          {/* Add more product options as needed */}
        </select>
        {errors.product && (
          <p className="mt-1 text-sm text-red-500">{errors.product.message}</p>
        )}
      </div>

      {/* Type of Inquiry Dropdown */}
      <div className="col-span-full">
        <label
          htmlFor="inquiry"
          className={`mb-${isSmall ? "2" : "3"} block text-sm text-[#878787]`}
        >
          Type of Inquiry:
        </label>
        <select
          id="inquiry"
          className={`w-full rounded-[23px] bg-[#EFEFEF] ${
            isSmall ? "p-3 text-xs" : "p-4 text-sm"
          }`}
          {...register("inquiry")}
        >
          <option value="">What Are You Looking For?</option>
          <option value="">Select Inquiry Type</option>
<option value="product-availability">Product Availability</option>
<option value="customization-options">Customization Options</option>
<option value="warranty-info">Warranty Info</option>
<option value="customer-service">Customer Service</option>
<option value="other">Other</option>

          {/* Add more inquiry options as needed */}
        </select>
        {errors.inquiry && (
          <p className="mt-1 text-sm text-red-500">{errors.inquiry.message}</p>
        )}
      </div>

      {/* Where Did You Hear About Us? Dropdown */}
      <div className="col-span-full">
        <label
          htmlFor="source"
          className={`mb-${isSmall ? "2" : "3"} block text-sm text-[#878787]`}
        >
          Where Did You Hear About Us?:
        </label>
        <select
          id="source"
          className={`w-full rounded-[23px] bg-[#EFEFEF] ${
            isSmall ? "p-3 text-xs" : "p-4 text-sm"
          }`}
          {...register("source")}
        >
          <option value="">How Did You Hear About Us?</option>
<option value="google-search">Google Search</option>
<option value="social-media">Social Media</option>
<option value="friend-family">Friend or Family</option>
<option value="advertisement">Advertisement</option>
<option value="other">Other</option>

          {/* Add more source options as needed */}
        </select>
        {errors.source && (
          <p className="mt-1 text-sm text-red-500">{errors.source.message}</p>
        )}
      </div>

      {/* Message Textarea */}
      <div className="col-span-full">
        <label
          htmlFor="message"
          className={`mb-${isSmall ? "2" : "3"} block text-sm text-[#878787]`}
        >
          Message:
        </label>
        <textarea
          id="message"
          placeholder="Enter Your Message"
          className={`w-full rounded-[23px] bg-[#EFEFEF] ${
            isSmall ? "p-3 text-xs" : "p-4 text-sm"
          }`}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Send Message Button */}
      <div className="col-span-full flex justify-end">
        <button
          type="submit"
          className={`rounded-full bg-[#FFA600] text-white ${
            isSmall
              ? "w-full px-5 py-2 text-sm sm:px-8 sm:py-3 sm:text-base"
              : "px-7 py-2.5 text-base sm:px-11 sm:py-4 sm:text-lg"
          }`}
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
