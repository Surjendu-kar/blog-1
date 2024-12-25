import DevImg from "@/public/feature-img/dev.jpg";
import CustomCard from "../CustomCard/CustomCard";

const CaseStudy = () => {
  const insightData = [
    {
      image: DevImg,
      category: "Healthcare",
      readTime: "5 mins",
      title: "Improving patient outcomes with AI",
      description:
        "Our Ai Hackathons are intensive, collaborative sessions that spark innovation",
    },
    {
      image: DevImg,
      category: "Innovation",
      readTime: "12 mins",
      title: "AI in Drug development processes",
      description:
        "Our AI Hackathons are intensive, collaborative sessions that spark innovation",
    },
    {
      image: DevImg,
      category: "Healthcare",
      readTime: "5 mins",
      title: "Improving patient outcomes with AI",
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

      {/* <button className="border-[#00C7BE] p-4">View all</button> */}
    </div>
  );
};

export default CaseStudy;
