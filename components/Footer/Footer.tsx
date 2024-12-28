"use client";
import { FC, useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import Link from "next/link";
import { FooterLink, GroupedLinks, FooterBuilderContent } from "./footer";

const SECTION_MAPPING = {
  about: ["Company Overview", "Careers", "Press & Media", "Testimonials"],
  resources: ["Blog", "Help Center", "Webinars & Events", "Case Studies"],
  support: ["Contact Us", "Technical Support", "Feedback", "Community Forum"],
  bottom: ["Terms of use", "Privacy policy", " Security"],
} as const;

const Footer: FC = () => {
  const [footerLinks, setFooterLinks] = useState<GroupedLinks>({
    about: [],
    resources: [],
    support: [],
    bottom: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFooterLinks() {
      try {
        builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
        const builderData = (await builder.getAll(
          "footer"
        )) as FooterBuilderContent[];

        const groups: GroupedLinks = {
          about: [],
          resources: [],
          support: [],
          bottom: [],
        };

        builderData.forEach((item) => {
          // Ensure all required properties exist
          if (!item.id || !item.name) return;

          const link: FooterLink = {
            id: item.id,
            name: item.name,
            data: {
              title: item.data?.title || item.name,
              url: item.data?.url || "#",
            },
            order: 0, // Default order
          };

          // Determine which section this link belongs to
          for (const [section, items] of Object.entries(SECTION_MAPPING)) {
            const index = items.findIndex((name) => name === item.name);
            if (index !== -1) {
              link.order = index;
              groups[section as keyof GroupedLinks].push(link);
              break;
            }
          }
        });

        // Sort each section by order
        for (const section of Object.keys(groups)) {
          groups[section as keyof GroupedLinks].sort(
            (a, b) => a.order - b.order
          );
        }

        setFooterLinks(groups);
      } catch (error) {
        console.error("Error fetching footer links:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFooterLinks();
  }, []);

  if (isLoading) return null;

  // Rest of the component remains the same...
  return (
    <footer className="bg-white container mx-auto">
      {/* Navigation Sections */}
      <div className="flex justify-around pt-10 pb-20">
        {/* About Section */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">About</h3>
          <ul className="space-y-2">
            {footerLinks.about.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.data.url}
                  className="text-[#B3B3B3] hover:text-gray-600"
                >
                  {link.data.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
          <ul className="space-y-2">
            {footerLinks.resources.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.data.url}
                  className="text-[#B3B3B3] hover:text-gray-600"
                >
                  {link.data.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support & Contact Section */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">
            Support & Contact
          </h3>
          <ul className="space-y-2">
            {footerLinks.support.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.data.url}
                  className="text-[#B3B3B3] hover:text-gray-600"
                >
                  {link.data.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 pt-8 pb-4">
        <div className="flex justify-center items-center space-y-4 md:space-y-0 text-sm text-gray-600 gap-6">
          <p>©2024 @weframetech · All rights reserved.</p>
          <div className="flex space-x-4">
            {footerLinks.bottom.map((link) => (
              <Link
                key={link.id}
                href={link.data.url}
                className="hover:text-gray-900"
              >
                {link.data.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
