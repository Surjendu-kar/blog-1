import DevImg from "@/public/feature-img/dev.jpg";
import CustomCard from "../CustomCard/CustomCard";
import { StaticImageData } from "next/image";

type InsightData = {
  image: StaticImageData;
  category: "News" | "Insights" | "Trends" | "Healthcare" | "Innovation";
  readTime: string;
  title: string;
  description: string;
};

const InsightUpdate = () => {
  const insightData: InsightData[] = [
    {
      image: DevImg,
      category: "News",
      readTime: "5 mins",
      title: "Harnessing AI for Healthcare Innovations",
      description:
        "Our AI Hackathons are intensive, collaborative sessions that spark innovation",
    },
    {
      image: DevImg,
      category: "Insights",
      readTime: "12 mins",
      title: "Unlocking AI's potential in AI Healthcare",
      description:
        "Our AI Hackathons are intensive, collaborative sessions that spark innovation",
    },
    {
      image: DevImg,
      category: "Trends",
      readTime: "10 mins",
      title: "The future of AI in Pharma",
      description:
        "Our AI Hackathons are intensive, collaborative sessions that spark innovation",
    },
  ] as const;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {insightData.map((data, index) => (
        <CustomCard
          key={index}
          image={data.image}
          category={data.category}
          readTime={data.readTime}
          title={data.title}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default InsightUpdate;
