import { useEmailValidation } from "@/utils/useEmailValidation";
import { FC } from "react";

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  buttonText?: string;
  placeholderText?: string;
}

const NewsletterSignup: FC<NewsletterSignupProps> = ({
  title,
  description,
  buttonText,
  placeholderText,
}) => {
  const { email, isValid, handleEmailChange } = useEmailValidation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    if (isValid) {
      console.log("Valid email submitted:", email);
    }
  };

  return (
    <div className="flex flex-col gap-4 rounded-lg max-w-[300px]">
      <div className="space-y-2">
        <p className="text-gray-900 text-2xl font-bold">{title}</p>
        <p className="text-gray-600 text-sm opacity-90">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder={placeholderText}
          className={`px-4 py-2 rounded border text-black text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 ${
            !isValid && email ? "border-red-500" : "border-gray-200"
          }`}
        />
        <button
          type="submit"
          className="bg-teal-400 text-white px-2 py-2 rounded text-sm hover:bg-teal-500 transition-colors"
        >
          {buttonText}
        </button>
      </form>
      {!isValid && email && (
        <p className="text-red-500 text-xs">
          Please enter a valid email address
        </p>
      )}
    </div>
  );
};

export default NewsletterSignup;
