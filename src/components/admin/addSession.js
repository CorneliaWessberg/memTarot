import React from "react";

function AddSession() {
  return (
    <>
      {/* som admin ska man kunna lägga till sessions, som
        hamnar på sessions sidan. Bara Malin ska kunna göra det här.*/}
      <div className="min-h-screen flex items-center justify-center  py-10 px-6 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <h1 className="justify-center font-bold text-3xl">
            {" "}
            Add new sessions/products
          </h1>
          <form method="post" className="mt-8 space-y-6">
            <div>
              <label for="email-address" className="sr-only">
                Class Name{" "}
              </label>
              <input
                id="email-address"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>

            <div>
              <label for="email-address" className="sr-only">
                Class Description{" "}
              </label>
              <input
                id="email-address"
                name="time"
                type="number"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Time"
              />
            </div>

            <div>
              <label for="email-address" className="sr-only">
                Class instructor{" "}
              </label>
              <input
                id="email-address"
                name="description"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Description"
              />
            </div>

            <div>
              <label for="email-address" className="sr-only">
                Class time
              </label>
              <input
                id="email-address"
                name="duration"
                type="number"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Duration"
              />
            </div>

            <input type="file" name="file" id="" />

            <button
              type="submit"
              class="group relative w-full flex justify-center border border-transparent text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200 mt-12"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Add 
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddSession;
