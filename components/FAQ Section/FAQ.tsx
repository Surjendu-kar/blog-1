"use client";
import { builder } from "@builder.io/sdk";
import { useEffect, useState } from "react";

interface Data {
  title: string;
  description: string;
}

export default function FAQ() {
  const [data, setData] = useState<Data[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCards() {
      builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
      const builderData = await builder.getAll("faq-data");

      try {
        const transformedCards = builderData.map((item) => ({
          title: item.data?.title ?? "",
          description: item.data?.description ?? "",
        }));

        setData(transformedCards);
      } catch (error) {
        console.error("Transformation error:", error);
      }
    }
    fetchCards();
  }, []);

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl flex flex-col gap-4">
      {data.map((item, index) => (
        <div key={index}>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div
              className="flex justify-between items-center p-4 cursor-pointer gap-4"
              onClick={() => toggleDescription(index)}
            >
              <h3 className="text-base font-normal text-gray-900">
                {item.title}
              </h3>
              <button className="w-6 h-6 flex items-center justify-center text-[#00C7BE] text-xl font-bold bg-[#007AFF26] rounded-md">
                {openIndex === index ? "−" : "+"}
              </button>
            </div>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-4 text-sm text-[#B3B3B3]">
                  {item.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
