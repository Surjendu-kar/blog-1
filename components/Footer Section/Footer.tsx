import { builder, BuilderContent } from "@builder.io/sdk";

interface SubItem {
  item: string;
}

interface FooterData {
  heading: string;
  subItems: SubItem[];
}

interface CustomBuilderContent extends BuilderContent {
  data: FooterData;
  name: string;
}

async function Footer() {
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

  const builderData = (await builder.getAll("footer-data", {
    prerender: false,
  })) as CustomBuilderContent[];

  const sortedData = [...builderData].sort((a, b) => {
    const idA = a.id ?? "";
    const idB = b.id ?? "";
    return idA.localeCompare(idB);
  });

  return (
    <div className="flex flex-col bg-white w-full">
      <div className="flex flex-col w-full">
        <div className="max-w-6xl mx-auto w-full px-4 md:pt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 pb-6 md:pb-8">
            {sortedData.map((section) => (
              <div
                key={section.id ?? "default-key"}
                className="flex flex-col space-y-3 md:space-y-4 col-span-1"
              >
                <h3 className="text-black font-bold text-base md:text-lg">
                  {section.name}
                </h3>
                <div className="flex flex-col space-y-2 md:space-y-3">
                  {section.data?.subItems?.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-[#B3B3B3] text-sm md:text-base hover:text-gray-700 transition-colors duration-200"
                    >
                      {item.item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full border-t border-gray-300">
          <div className="max-w-6xl mx-auto px-4 py-4 md:py-5">
            <div className="flex flex-col sm:flex-row items-center justify-center text-[#666666] text-xs sm:text-sm gap-3 sm:gap-5">
              <p className="text-center">
                ©2024 @weframetech · All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <p className="cursor-pointer whitespace-nowrap">Term of use</p>
                <p className="cursor-pointer whitespace-nowrap">
                  Privacy policy
                </p>
                <p className="cursor-pointer whitespace-nowrap">Security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
