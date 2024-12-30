import BlogPage from "@/components/blog/ssr-components/Blog Page/BlogPage";
import CaseStudyPage from "@/components/blog/ssr-components/Case Study/CaseStudyPage";
import InsightUpdatePage from "@/components/blog/ssr-components/Insight Update/InsightUpdatePage";

async function page() {
  return (
    <div className="flex flex-col bg-white gap-10">
      <BlogPage />
      <CaseStudyPage />
      <InsightUpdatePage />
    </div>
  );
}

export default page;
