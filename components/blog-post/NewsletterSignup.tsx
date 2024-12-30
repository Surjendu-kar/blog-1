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
  return (
    <div className="flex flex-col gap-4  rounded-lg max-w-[300px]">
      <div className="space-y-2">
        <p className="text-[#000000] text-2xl font-bold">{title}</p>
        <p className="text-[#595959] text-sm opacity-90">{description}</p>
      </div>

      <div className="flex gap-2">
        <input
          type="email"
          placeholder={placeholderText}
          className="px-4 py-2 rounded border border-gray-200 text-sm focus:outline-none focus:border-[#00C7BE]"
        />
        <button className="bg-[#00C7BE] text-white px-2 py-2 rounded text-sm hover:bg-[#00B3AB] transition-colors">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default NewsletterSignup;
