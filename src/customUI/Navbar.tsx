const facebookURL = `https://www.facebook.com/officialfatimastore`;

export function Navbar() {
  return (
    <header className="container mx-auto lg:mt-3 ">
      <div className=" flex justify-between items-center  border-[2px]  rounded-full p-2 border-gray-700 ">
        <div className="  ">
          <div className="flex justify-center  items-center space-x-2">
            <span>
              <img
                src="../../logo.png"
                className="border bg-white border-white w-12 h-12 p-1 rounded-full"
                alt="Fatima Crockery"
              />
            </span>
            <span className="lg:inline-flex hidden animate-text-gradient bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#b9b9b9] bg-[200%_auto] bg-clip-text font-bold text-2xl text-transparent">
              Fatima Crockery
            </span>
          </div>
        </div>
        <div className="">
          {/* <div className="flex justify-center items-center "> */}
          <a href={facebookURL} target="_blank">
            <span className="relative inline-block overflow-hidden rounded-full p-[3px]">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-4 py-[6px] lg:text-xl font-medium text-gray-50 p-2 backdrop-blur-3xl">
                Facebook Page
              </div>
            </span>
          </a>
          {/* </div> */}
        </div>
      </div>
    </header>
  );
}
