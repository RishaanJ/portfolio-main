import { useState, useEffect } from "react";

const Popup = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, [])

  return (
    show && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/75 transition-opacity">
        <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:w-full sm:max-w-lg">
          {/* Content */}
          <div className="bg-white px-6 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:size-10">
                {/* Icon */}
                <svg
                  className="size-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  />
                </svg>
              </div>
              {/* Text */}
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg font-semibold text-gray-900">Hey there! 👋</h3>
                <p className="mt-2 text-sm text-gray-500">
                  I'm currently looking for software internships. Let’s connect!
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="bg-gray-50 px-6 py-3 sm:flex sm:flex-row-reverse">
            <a
              onClick={() => setShow(false)}
              className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 sm:ml-3 sm:w-auto cursor-pointer" href="mailto:rishaanjain@gmail.com"
            >
              Contact Me!
            </a>
            <button
              onClick={() => setShow(false)}
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
