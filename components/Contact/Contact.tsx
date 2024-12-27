import ContactBg from "@/public/contact-img/contact -bg.jpeg";
import Image from "next/image";

function Contact() {
  return (
    <div className="relative w-full h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src={ContactBg}
          alt="contact-bg"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Card */}
      <div className="relative z-20 h-full flex items-center justify-center px-4">
        <div className="flex flex-col bg-white rounded-lg p-8 px-24 py-14 gap-5">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Schedule Your Consultation Today
            </h2>
            <p className="text-gray-600 text-sm">
              Webframe tech is the modern, award-winning platform that empowers
              some of the largest names in healthcare and advisory sectors.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-5 ali">
              <input
                type="email"
                placeholder="Enter your email"
                className=" pl-4 pr-20 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C7BE] focus:border-transparent"
              />

              <button className="bg-[#00C7BE] text-white px-3 py-2 rounded-md hover:bg-[#00C7BE]/90 transition-colors">
                book a meeting
              </button>
            </div>
            <p className="text-xs text-[#B3B3B3]">
              By submitting you agree to our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
