import Link from "next/link";
import Image from "next/image";
import CategoryName from "./CategoryName";

interface SocialInfoProps {
  avatarUrl: string;
  readingTime: string;
  date: string;
  author: string;
  tag: string;
  twitterUrl: string;
  linkedinUrl: string;
  facebookUrl: string;
  link: string;
}
const SocialInfo = ({
  avatarUrl = "https://cdn.builder.io/api/v1/image/assets%2F76cb628f6d0c4bb38273da6779617caf%2F0c75df2bd5f943398608b5f7c35ad77b",
  readingTime = "12 mins",
  date = "11 Nov 2024",
  author = "Bernd Holbein",
  tag = "AI Healthcare",
  twitterUrl = "",
  linkedinUrl = "",
  facebookUrl = "",
  link = "",
}: SocialInfoProps) => {
  return (
    <div className="flex w-full max-w-[75rem] items-center justify-between gap-4 smCustom:flex-col smCustom:items-start smCustom:gap-6">
      <div className="flex w-full flex-wrap items-center gap-6 smCustom:justify-between">
        <CategoryName
          avatarUrl={avatarUrl}
          author={author}
          date={date}
          readingTime={readingTime}
          tag={tag}
        />
      </div>
      <div className="flex items-center gap-4">
        <Link href={link} className="transition-transform hover:scale-110">
          <Image
            src="/blog-img/link.png"
            alt="Link"
            width={40}
            height={40}
            quality={40}
          />
        </Link>
        <Link
          href={twitterUrl}
          className="transition-transform hover:scale-110"
        >
          <Image
            src="/blog-img/x.png"
            alt="Link"
            width={40}
            height={40}
            quality={40}
          />
        </Link>
        <Link
          href={linkedinUrl}
          className="transition-transform hover:scale-110"
        >
          <Image
            src="/blog-img/linkedin.png"
            alt="Link"
            width={40}
            height={40}
            quality={40}
          />
        </Link>
        <Link
          href={facebookUrl}
          className="transition-transform hover:scale-110"
        >
          <Image
            src="/blog-img/facebook.png"
            alt="Link"
            width={40}
            height={40}
            quality={40}
          />
        </Link>
      </div>
    </div>
  );
};
export default SocialInfo;
