"use client";
import { builder, Builder } from "@builder.io/react";
import BlogCard from "./components/BlogWrap/BlogCard";
import BlogDetail from "./components/blog-page-2/BlogDetails";
import BlogWrap from "./components/BlogWrap/BlogWrap";
import Card from "./components/BlogWrap/Card";
import CaseStudyCard from "./components/Feature Section/CaseStudyCard";
import CategoryName from "./components/blog-page-2/CategoryName";
import CategoryNav from "./components/BlogWrap/CategoryNav";
import Contact from "./components/Contact/Contact";
import FAQ from "./components/FAQ Section/FAQ";
import Heading from "./components/Heading/Heading";
import InsightUpdateCard from "./components/Feature Section/InsightUpdateCard";
import NewsletterSignup from "./components/blog-page-2/NewsletterSignup";
import Pagination from "./components/BlogWrap/Pagination";
import RelatedPost from "./components/blog-page-2/RelatedPost";
import VideoBanner from "./components/blog-page-2/VideoBanner";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Builder, {
  name: "Builder",
});

Builder.registerComponent(BlogCard, {
  name: "BlogCard",
});

Builder.registerComponent(CategoryNav, {
  name: "CategoryNav",
});

Builder.registerComponent(Pagination, {
  name: "Pagination",
});

Builder.registerComponent(Card, {
  name: "Card",
  inputs: [
    {
      name: "blogImage",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
      defaultValue: "/blog-img/blog-img.jpg",
    },
    {
      name: "blogTitle",
      type: "string",
      defaultValue: "Title",
    },
    {
      name: "blogDescription",
      type: "longText",
      defaultValue: "description",
    },
    {
      name: "authorImage",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
      defaultValue: "/blog-img/avatar.png",
    },
    {
      name: "authorName",
      type: "string",
      defaultValue: "Bernd Holbein",
    },
    {
      name: "tag",
      type: "string",
      defaultValue: "Insights",
    },
    {
      name: "readTime",
      type: "string",
      defaultValue: "12 mins",
    },
  ],
});

Builder.registerComponent(InsightUpdateCard, {
  name: "InsightUpdateCard",
});

Builder.registerComponent(CaseStudyCard, {
  name: "CaseStudyCard",
});

Builder.registerComponent(Contact, {
  name: "Contact",
});

Builder.registerComponent(FAQ, {
  name: "FAQ",
});

Builder.registerComponent(Heading, {
  name: "Heading",
  inputs: [
    {
      name: "subtitle",
      type: "string",
      defaultValue: "BLOG",
      helperText: "Optional subtitle text displayed above the title",
    },
    {
      name: "title",
      type: "string",
      required: true,
      helperText: "Main title text",
    },
    {
      name: "description",
      type: "longText",
      helperText: "Optional description text displayed below the title",
    },
    {
      name: "titleFontSize",
      type: "string",
      defaultValue: "50px",
      helperText: "Font size for the title (e.g., 50px, 3rem)",
    },
    {
      name: "descriptionFontSize",
      type: "string",
      defaultValue: "14px",
      helperText: "Font size for the description (e.g., 14px, 1rem)",
    },
  ],
});

Builder.registerComponent(BlogWrap, {
  name: "BlogWrap",
});

Builder.registerComponent(CategoryName, {
  name: "CategoryName",
});

Builder.registerComponent(BlogDetail, {
  name: "BlogDetail",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Artificial Intelligence x Healthcare",
      helperText: "The main title of the blog post",
    },
    {
      name: "titleFontSize",
      type: "string",
      defaultValue: "35px",
      helperText: "Font size for the title",
    },
    {
      name: "content",
      type: "longText",
      defaultValue:
        "Lorem ipsum dolor sit amet consectetur. Enim quis et sapien id integer...",
      helperText: "The main content of the blog post",
    },
    {
      name: "contentFontSize",
      type: "string",
      defaultValue: "16px",
      helperText: "Font size for the main content",
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
      helperText: "The featured image for the blog post",
    },
    {
      name: "secondParagraph",
      type: "longText",
      defaultValue:
        "Ornare ac sem tortor elementum morbi. Dictum imperdiet pharetra id nulla id cursus...",
      helperText: "The second paragraph after the image",
    },
    {
      name: "secondParagraphFontSize",
      type: "string",
      defaultValue: "16px",
      helperText: "Font size for the second paragraph",
    },
    {
      name: "bulletPoints",
      type: "list",
      subFields: [
        {
          name: "point",
          type: "string",
        },
      ],
      defaultValue: [
        { point: "Sed iaculis aenean sit sed risus arcu vitae integer elit." },
        { point: "Sed iaculis aenean sit sed risus arcu vitae integer elit." },
        { point: "Sed iaculis aenean sit sed risus arcu vitae integer elit." },
      ],
      helperText: "List of bullet points",
    },
    {
      name: "bulletPointsFontSize",
      type: "string",
      defaultValue: "16px",
      helperText: "Font size for bullet points",
    },
    {
      name: "conclusion",
      type: "longText",
      defaultValue: "Ornare ac sem tortor elementum morbi...",
      helperText: "The concluding paragraph",
    },
    {
      name: "conclusionFontSize",
      type: "string",
      defaultValue: "16px",
      helperText: "Font size for the conclusion",
    },
  ],
});

Builder.registerComponent(RelatedPost, {
  name: "RelatedPost",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Unlocking AI's potential in AI Healthcare",
      helperText: "The main title",
    },
    {
      name: "description",
      type: "string",
      defaultValue:
        "Our Ai Hackathons are intensive, collaborative sessions that spark Innovation",
      helperText: "Description text below the title",
    },
    {
      name: "authorImage",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
      defaultValue: "/blog-img/avatar.png",
      helperText: "Author's profile image",
    },
    {
      name: "authorName",
      type: "string",
      defaultValue: "Bernd Holbein",
      helperText: "Author's name",
    },
    {
      name: "tag",
      type: "string",
      defaultValue: "Insights",
      helperText: "Category tag",
    },
    {
      name: "readTime",
      type: "string",
      defaultValue: "12 mins",
      helperText: "Estimated reading time",
    },
  ],
});

Builder.registerComponent(NewsletterSignup, {
  name: "NewsletterSignup",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "WeframeTech News Weekly",
      helperText: "Newsletter title text",
    },
    {
      name: "description",
      type: "longText",
      defaultValue:
        "Stay informed on our latest AI advancements and business insights by joining the Symbiofy newsletter. By subscribing, you consent to our Privacy Policy.",
      helperText: "Newsletter description text",
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "Join now",
      helperText: "Text displayed on the submit button",
    },
    {
      name: "placeholderText",
      type: "string",
      defaultValue: "Enter your email",
      helperText: "Placeholder text for the email input",
    },
  ],
});

Builder.registerComponent(VideoBanner, {
  name: "VideoBanner",
  inputs: [
    {
      name: "videoUrl",
      type: "file",
      allowedFileTypes: ["mp4", "webm"],
      helperText: "Upload or provide URL for the background video",
    },
    {
      name: "videoPoster",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
      helperText: "Thumbnail image shown while video is loading",
    },
    {
      name: "height",
      type: "string",
      defaultValue: "400px",
      enum: ["300px", "400px", "500px", "600px"],
      helperText: "Height of the video banner",
    },
  ],
});
