"use client";
import { useState } from "react";
import ContactBg from "@/public/contact-img/contact -bg.jpeg";
import Image from "next/image";

interface ContactProps {
  title?: string;
  description?: string;
  emailPlaceholder?: string;
  buttonText?: string;
  privacyText?: string;
}

function Contact({
  title,
  description,
  emailPlaceholder,
  buttonText,
  privacyText,
}: ContactProps) {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email: string) => {
    if (!email) return true;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      // Don't show error for empty submission
      return;
    }
    if (validateEmail(email)) {
      // Handle successful submission
      console.log("Valid email submitted:", email);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="relative w-full h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src={ContactBg}
          alt="contact-bg"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Card */}
      <div className="relative z-20 h-full flex items-center justify-center px-4">
        <div className="flex flex-col bg-white rounded-lg p-8 px-24 py-14 gap-5">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex gap-5">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder={emailPlaceholder}
                  className={`pl-4 pr-20 text-[#000000] py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C7BE] focus:border-transparent ${
                    !isValid && email ? "border-red-500" : "border-gray-300"
                  }`}
                />

                <button
                  type="submit"
                  className="bg-[#00C7BE] text-white px-3 py-2 rounded-md hover:bg-[#00C7BE]/90 transition-colors"
                >
                  {buttonText}
                </button>
              </div>
              {!isValid && email && (
                <p className="text-red-500 text-xs mt-1">
                  Please enter a valid email address
                </p>
              )}
            </div>
            <p className="text-xs text-[#B3B3B3]">{privacyText}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
