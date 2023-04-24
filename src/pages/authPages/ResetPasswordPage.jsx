const resetPassword = () => {
  return (
    <div className="reset">
      <div className="login pt-20 border pl-[460px] pt-[80px] pb-[100px]">
        <div class="w-full max-w-sm px-4 py-4 bg-white border border-gray-400 item-center rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form class="space-y-6" action="#">
            <h5 class="text-xl pt-5 text-center font-medium text-gray-900 dark:text-white">
              Reset New Password
            </h5>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Create password"
                class="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Confirm password"
                class="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div class="flex items-start">
              <div class="flex items-start"></div>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-red-700 hover:red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="flex">
        <div className=" bg-red-700 w-10 h-10"></div>
        <div className=" bg-red-700 "></div>
        <div className=" bg-red-700   "></div>
      </div>
    </div>
  );
};
export default resetPassword;
