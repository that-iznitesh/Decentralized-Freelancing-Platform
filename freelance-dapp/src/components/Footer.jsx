import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#0b1220] text-gray-300 px-10 py-12">

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Logo + Info */}
        <div>
          <h1 className="text-2xl font-bold text-white">Freelance DApp</h1>
          <p className="mt-3 text-sm">India / English</p>
          <p className="mt-2 text-sm">Help & Support</p>
          <p className="mt-2 text-sm">Accessibility</p>
        </div>

        {/* Column 1 */}
        <div>
          <h3 className="text-white font-semibold mb-3">Freelancer</h3>
          <ul className="space-y-2 text-sm">
            <li>Categories</li>
            <li>Projects</li>
            <li>Contests</li>
            <li>Freelancers</li>
            <li>Enterprise</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>How it Works</li>
            <li>Security</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-3">Terms</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Copyright Policy</li>
            <li>Fees & Charges</li>
          </ul>
        </div>

        {/* Social + Apps */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>

          <div className="flex gap-4 text-xl">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
          </div>

          {/* App Buttons */}
          <div className="mt-6 space-y-2">
            <button className="border px-3 py-2 w-full text-sm rounded">
              App Store
            </button>
            <button className="border px-3 py-2 w-full text-sm rounded">
              Google Play
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">

        <p>© 2026 Freelance DApp. All rights reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <span>87,591,827 Users</span>
          <span>25,539,829 Jobs</span>
        </div>

      </div>
    </div>
  );
}

export default Footer;