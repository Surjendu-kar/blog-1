"use client";
import { builder, Builder } from "@builder.io/react";
import BlogCard from "./components/BlogWrap/BlogCard";
import Card from "./components/BlogWrap/Card";
import CaseStudyCard from "./components/Feature Section/CaseStudyCard";
import CategoryNav from "./components/BlogWrap/CategoryNav";
import Contact from "./components/Contact/Contact";
import InsightUpdateCard from "./components/Feature Section/InsightUpdateCard";
import Pagination from "./components/BlogWrap/Pagination";
import Question from "./components/FAQ Section/Question";

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

Builder.registerComponent(Question, {
  name: "Question",
});

Builder.registerComponent(Contact, {
  name: "Contact",
});
