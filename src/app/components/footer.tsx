export default function Foter() {
  return (
    <footer className="bg-[#FFFFFF] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address Section */}
          <div>
            <p className="  text-gray-600">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="font-semibold text-gray-400 mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Shop</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </div>
          {/* Help Section */}
          <div>
            <h4 className="font-semibold text-gray-400 mb-4">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Payment Options</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="font-semibold text-gray-400 mb-4">Newsletter</h4>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gray-800 text-white rounded-r-md hover:bg-gray-700"
              >
                SUBSCRIBE
                </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-start text-gray-600">
          2022 Meubel House. All rights reserved
        </div>
      </div>
    </footer>
  );
}
