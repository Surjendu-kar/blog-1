import { builder } from "@builder.io/sdk";
import FooterLegal from "./FooterLegal";
import { CustomBuilderContent } from "@/types";

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
                <p
                  className="text-black font-bold text-base md:text-lg"
                >
                  {section.name}
                </p>
                <div className="flex flex-col space-y-2 md:space-y-3">
                  {section.data?.subItems?.map((item, index) => (
                    <a
                      key={index}
                      href={item.url ?? "#"}
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

        {/* Footer Legal Section */}
        <FooterLegal />
      </div>
    </div>
  );
}

export default Footer;
