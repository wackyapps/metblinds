"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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

export default function ContactForm({ isSmall }: { isSmall?: boolean }) {
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
      className={`grid w-full grid-cols-1 gap-${isSmall ? "3" : "5"} rounded-lg ${
        isSmall ? "p-3" : "p-4"
      } md:grid-cols-2`}
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
          <option value="">Location</option>
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
          {/* Add more location options as needed */}
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
          <option value="product1">Product 1</option>
          <option value="product2">Product 2</option>
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
          <option value="inquiry1">Inquiry 1</option>
          <option value="inquiry2">Inquiry 2</option>
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
          <option value="">Friends And Family</option>
          <option value="friends">Friends And Family</option>
          <option value="online">Online</option>
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
            isSmall ? "w-full px-8 py-3 text-base" : "px-11 py-4 text-lg"
          }`}
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
