export default function Footer() {
  return (
    <footer className="bg-white container mx-auto ">
      {/* Navigation Sections */}
      <div className="flex  justify-around pt-10 pb-20">
        {/* About Section */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">About</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-[#B3B3B3] hover:text-gray-600">
                Company Overview
              </a>
            </li>
            <li>
              <a href="#" className="text-[#B3B3B3] hover:text-gray-600">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-[#B3B3B3] hover:text-gray-600">
                Press & Media
              </a>
            </li>
            <li>
              <a href="#" className="text-[#B3B3B3] hover:text-gray-600">
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-[#B3B3B3] hover:text-gray-600">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-[#B3B3B3] hover:text-gray-600">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="text-[#B3B3B3] hover:text-gray-600">
                Webinars & Events
              </a>
            </li>
            <li>
              <a href="#" className="text-[#B3B3B3] hover:text-gray-600">
                Case Studies
              </a>
            </li>
          </ul>
        </div>

        {/* Support & Contact Section */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">
            Support & Contact
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-[#B3B3B3] hover:text-gray-600">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-[#B3B3B3] hover:text-gray-600">
                Technical Support
              </a>
            </li>
            <li>
              <a href="#" className="text-[#B3B3B3] hover:text-gray-600">
                Feedback
              </a>
            </li>
            <li>
              <a href="#" className="text-[#B3B3B3] hover:text-gray-600">
                Community Forum
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 pt-8 pb-4">
        <div className="flex justify-center items-center space-y-4 md:space-y-0 text-sm text-gray-600 gap-6">
          <p>©2024 @weframetech · All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-900">
              Terms of use
            </a>
            <a href="#" className="hover:text-gray-900">
              Privacy policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
