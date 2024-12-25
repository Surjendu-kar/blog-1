"use client";
import { builder, Builder } from "@builder.io/react";
import BlogWrap from "./components/BlogWrap/BlogWrap";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import InsightUpdate from "./components/Feature/InsightUpdate";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Builder, {
  name: "Builder",
});

Builder.registerComponent(Footer, {
  name: "Footer",
});

Builder.registerComponent(Header, {
  name: "Header",
});

Builder.registerComponent(BlogWrap, {
  name: "BlogWrap",
});

Builder.registerComponent(InsightUpdate, {
  name: "InsightUpdate",
});

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
