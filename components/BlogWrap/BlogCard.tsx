import Image from "next/image";
import avatarImg from "@/public/blog-img/avatar.png";

type BlogCardProps = {
  image: string;
  title: string;
  description: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ image, title, description }) => {
  return (
    <div className="rounded overflow-hidden ">
      {/* Blog image */}
      <Image src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />

      <div className="p-4">
        {/* Blog title */}
        <h3 className="font-bold text-xl mb-2">{title}</h3>

        {/* Blog description */}
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            {/* Avatar image */}
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <Image
                src={avatarImg}
                alt="Avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>
            {/* Author name */}
            <span className="text-sm">Bernd Holbein</span>
          </div>

          {/* Tag */}
          <span className="bg-teal-400 text-white text-xs px-2 py-1 rounded">
            Insights
          </span>

          {/* Reading time */}
          <span className="text-sm text-gray-500">12 mins</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
