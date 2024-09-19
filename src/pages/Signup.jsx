import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-[#0e8ac8]">
        <div className="max-w-5xl w-full space-y-8 p-8 bg-white rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img src="/logo.png" alt="Logo" className="h-10" />
            </Link>
            <h2 className="text-3xl text-gray-900">Log in</h2>
          </div>

          <div className="grid grid-cols-2">
            <div className="border-r pr-10">
              <h3 className="text-xl text-gray-800 mb-2">For Vendors</h3>
              <form className="space-y-6">
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="vendor-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="vendor-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Vendor Email"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="vendor-password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="vendor-password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Vendor Password"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0e8ac8]"
                  >
                    Log in as Vendor
                  </button>
                </div>
              </form>
            </div>

            <div className="pl-10">
              <h3 className="text-xl text-gray-800 mb-2">For Clients</h3>
              <form className="space-y-6">
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="client-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="client-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Client Email"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="client-password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="client-password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Client Password"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0e8ac8]"
                  >
                    Log in as Client
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>

          {/* Sign Up and Footer Section */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              No account? Join Toptalez as a{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Company
              </a>{" "}
              or{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Client
              </a>
            </p>
            <p className="text-xs text-gray-500 mt-4">
              © Copyright 2024 Toptalez, LLC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
