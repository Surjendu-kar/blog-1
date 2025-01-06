"use client";
import { builder, Builder } from "@builder.io/react";
import Contact from "./components/contact/Contact";
import FAQ from "./components/blog/faq/FAQ";
import Heading from "./components/blog/heading/Heading";
import BlogWrap from "./components/blog/blogWrap/BlogWrap";
import CategoryName from "./components/blog-post/CategoryName";
import BlogDetail from "./components/blog-post/BlogDetails";
import NewsletterSignup from "./components/blog-post/NewsletterSignup";
import VideoBanner from "./components/blog-post/VideoBanner";
import FeatureRef from "./components/blog/feature/FeatureRef";
import RelatedRef from "./components/blog-post/relatedPostRef/RelatedRef";
import SocialInfo from "./components/blog-post/SocialInfo";
import CategoryNav from "./components/blog/blogWrap/CategoryNav";
import Pagination from "./components/blog/blogWrap/Pagination";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(CategoryNav, {
  name: "CategoryNav",
});

Builder.registerComponent(Pagination, {
  name: "Pagination",
});

Builder.registerComponent(Contact, {
  name: "Contact",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Schedule Your Consultation Today",
      helperText: "Main heading text",
    },
    {
      name: "description",
      type: "longText",
      defaultValue:
        "Weframe tech is the modern, award-winning platform that empowers some of the largest names in healthcare and advisory sectors.",
      helperText: "Description text below the heading",
    },
    {
      name: "emailPlaceholder",
      type: "string",
      defaultValue: "Enter your email",
      helperText: "Placeholder text for email input",
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "book a meeting",
      helperText: "Text for the submit button",
    },
    {
      name: "privacyText",
      type: "string",
      defaultValue: "By submitting you agree to our privacy policy.",
      helperText: "Privacy policy text below the form",
    },
  ],
});

export default Contact;

Builder.registerComponent(FAQ, {
  name: "FAQ",
  inputs: [
    {
      name: "subtitle",
      type: "richText",
      
      helperText: "Optional subtitle text displayed above the title",
      defaultValue: "Blog",
      required: true,
    },
    {
      name: "title",
      type: "richText",
      helperText: "Main title text",
      defaultValue: "Frequently asked questions",
      required: true,
    },
    {
      name: "description",
      type: "richText",
      helperText: "Optional description text displayed below the title",
      required: true,
      defaultValue: "Explore to learn more about how Symbiofy can empower your business with AI-driven solutions.",
    },
    {
      name: "faqItems",
      type: "list",
      subFields: [
        {
          name: "title",
          type: "richText",
          helperText: "The question text for this FAQ item",
          required: true,
        },
        {
          name: "description",
          type: "richText",
          helperText: "The answer text for this FAQ item",
          required: true,
        },
      ],
      helperText: "List of FAQ items to display",
    },
    {
      name: "itemsToShow",
      type: "number",
      defaultValue: 4,
      helperText: "Number of FAQ items to show before 'View all' button",
    },
  ],
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
    {
      name: "width",
      type: "string",
      defaultValue: "100%",
      enum: ["100%", "75%", "50%", "25%"],
      helperText: "Width of the video banner",
    },
  ],
});

Builder.registerComponent(FeatureRef, {
  name: "FeatureRef",
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
    {
      name: "reference",
      type: "list",
      subFields: [
        {
          name: "value",
          type: "reference",
        },
      ],
    },
  ],
});

Builder.registerComponent(RelatedRef, {
  name: "RelatedRef",
  inputs: [
    {
      name: "heading",
      type: "string",
      defaultValue: "Related Posts",
    },
    {
      name: "titleFontSize",
      type: "string",
      defaultValue: "24px",
    },
    {
      name: "reference",
      type: "list",
      subFields: [
        {
          name: "value",
          type: "reference",
        },
      ],
    },
  ],
});

Builder.registerComponent(SocialInfo, {
  name: "SocialInfo",
  inputs: [
    {
      name: "author",
      type: "string",
      required: true,
      defaultValue: "Bernd Holbein",
    },
    {
      name: "avatarUrl",
      type: "file",
      required: true,
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2F76cb628f6d0c4bb38273da6779617caf%2F0c75df2bd5f943398608b5f7c35ad77b",
    },
    {
      name: "date",
      type: "string",
      required: true,
      defaultValue: "11 Nov 2024",
    },
    {
      name: "readingTime",
      type: "string",
      required: true,
      defaultValue: "12 mins",
    },
    {
      name: "tag",
      type: "string",
      required: true,
      defaultValue: "AI Healthcare",
    },
    {
      name: "facebookUrl",
      type: "string",
      required: true,
      defaultValue: "",
    },
    {
      name: "link",
      type: "string",
      required: true,
      defaultValue: "",
    },
    {
      name: "linkedinUrl",
      type: "string",
      required: true,
      defaultValue: "",
    },
    {
      name: "twitterUrl",
      type: "string",
      required: true,
      defaultValue: "",
    },
  ],
});
