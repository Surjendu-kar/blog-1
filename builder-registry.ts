"use client";
import { builder, Builder } from "@builder.io/react";
import BlogCard from "./components/BlogWrap/BlogCard";
import BlogWrap from "./components/BlogWrap/BlogWrap";
import CategoryNav from "./components/BlogWrap/CategoryNav";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Builder, {
  name: "Builder",
});

Builder.registerComponent(Footer, {
  name: "Footer",
});

Builder.registerComponent(Header, {
  name: "Header",
});

Builder.registerComponent(BlogCard, {
  name: "BlogCard",
});

Builder.registerComponent(BlogWrap, {
  name: "BlogWrap",
});

Builder.registerComponent(CategoryNav, {
  name: "CategoryNav",
});
