// FooterLegal.tsx
import { builder, BuilderContent } from "@builder.io/sdk";

interface LegalLink {
  label: string;
  url: string;
}

interface FooterLegalData {
  copyrightText: string;
  legalLinks: LegalLink[];
}

interface FooterLegalContent extends BuilderContent {
  data: FooterLegalData;
}

async function FooterLegal() {
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

  const footerLegal = (await builder.get("footer-legal", {
    prerender: false,
  })) as FooterLegalContent;

  return (
    <div className="w-full border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-4 md:py-5">
        <div className="flex flex-col sm:flex-row items-center justify-center text-[#666666] text-xs sm:text-sm gap-3 sm:gap-5">
          <p className="text-center">{footerLegal.data.copyrightText}</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {footerLegal.data.legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="cursor-pointer whitespace-nowrap hover:text-gray-700 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterLegal;
