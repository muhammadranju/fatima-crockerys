import products from "../data/products.json";
export function ProductSection() {
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.description}
          className="rounded-md overflow-hidden mx-auto relative border  border-gray-800 p-[1px] backdrop-blur-3xl "
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
          <div className="   rounded-md  bg-slate-950 px-3 py-1font-medium text-gray-50 backdrop-blur-3xl">
            <img
              src={product.image}
              alt="Laptop"
              className=" lg:w-fit   rounded-2xl p-3 "
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {product.title.length >= 50
                  ? product.title.substring(0, 50) + "..."
                  : product.title}
              </h1>
              <p className="mt-3 text-sm ">
                {product.description.length >= 30
                  ? product.description.substring(0, 100) + "..."
                  : product.description}
              </p>
              {product.hashTags.map((hashTag) => (
                <div className="mt-4 flex  flex-col lg:flex-row" key={hashTag}>
                  <span className="mb-2  rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #{hashTag.split(" ").join("-").toLocaleLowerCase()}
                  </span>
                </div>
              ))}
              {/* <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Sneakers
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Nike
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Airmax
              </span>
            </div> */}
            </div>
          </div>

          {/* <div className="relative h-48 w-48 overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
            <div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl"></div>
          </div> */}
        </div>
      ))}
    </div>
  );
}
