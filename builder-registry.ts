"use client";
import { builder, Builder } from "@builder.io/react";
import BlogCard from "./components/BlogWrap/BlogCard";
import BlogWrap from "./components/BlogWrap/BlogWrap";
import Card from "./components/BlogWrap/Card";
import CaseStudyCard from "./components/Feature Section/CaseStudyCard";
import CategoryNav from "./components/BlogWrap/CategoryNav";
import Contact from "./components/Contact/Contact";
import FAQ from "./components/FAQ Section/FAQ";
import Heading from "./components/Heading/Heading";
import InsightUpdateCard from "./components/Feature Section/InsightUpdateCard";
import Pagination from "./components/BlogWrap/Pagination";

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
