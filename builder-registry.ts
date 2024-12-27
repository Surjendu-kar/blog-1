"use client";
import { builder, Builder } from "@builder.io/react";
import BlogCard from "./components/BlogWrap/BlogCard";
import Card from "./components/BlogWrap/Card";
import CaseStudy from "./components/Feature Section/CaseStudy";
import CategoryNav from "./components/BlogWrap/CategoryNav";
import InsightUpdate from "./components/Feature Section/InsightUpdate";
import Pagination from "./components/BlogWrap/Pagination";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Builder, {
  name: "Builder",
});

Builder.registerComponent(InsightUpdate, {
  name: "InsightUpdate",
});

Builder.registerComponent(CaseStudy, {
  name: "CaseStudy",
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
