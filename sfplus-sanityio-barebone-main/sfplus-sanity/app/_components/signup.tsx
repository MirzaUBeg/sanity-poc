/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/VzyoCe5JKn5
 */
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

export function Signup() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-sfplus-dark bg-opacity-75">
      <div className="w-[450px] rounded-lg bg-white shadow-xl">
        <div className="p-6">
          <div className="flex items-center justify-between pb-4">
            <h2 className="text-xl font-semibold">A few more details</h2>
            <button className="text-gray-400 hover:text-gray-500">
              <PanelTopCloseIcon className="h-6 w-6" />
            </button>
          </div>
          <p className="pb-4 text-xs text-gray-600">
            Fill in these fields to complete your event registration
          </p>
          <form>
            <div className="space-y-4">
              <div>
                <label
                  className="block text-xs text-gray-700"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  id="firstName"
                  required
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block text-xs text-gray-700"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  id="lastName"
                  required
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block text-xs text-gray-700"
                  htmlFor="country"
                >
                  Country
                </label>
                <select
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  id="country"
                  required
                >
                  <option>Japan</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-700" htmlFor="role">
                  Select your role
                </label>
                <select
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  id="role"
                  required
                >
                  <option />
                </select>
              </div>
              <div>
                <label
                  className="block text-xs text-gray-700"
                  htmlFor="industry"
                >
                  Select your industry
                </label>
                <select
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-xs"
                  id="industry"
                  required
                >
                  <option />
                </select>
              </div>
              <div>
                <label
                  className="block text-xs text-gray-700"
                  htmlFor="relationship"
                >
                  Relationship to Salesforce
                </label>
                <select
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-xs"
                  id="relationship"
                  required
                >
                  <option />
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <a
                href="https://v0.dev/r/vM513Ow9jFd"
                className="hover:text-sfplus-light-blue"
              >
                Powered by V0
              </a>
              <Link
                href="/"
                className="flex h-9 w-32 items-center justify-center rounded-md bg-sfplus-light-blue font-heading text-xs text-white"
              >
                <p>Done</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function PanelTopCloseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <path d="m9 16 3-3 3 3" />
    </svg>
  );
}
