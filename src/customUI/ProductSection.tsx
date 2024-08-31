import products from "../data/products.json";
export function ProductSection() {
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {products.map((product) => (
        <div key={product.description} className="rounded-md border mx-auto ">
          <img
            src={product.image}
            alt="Laptop"
            className=" lg:w-fit  lg:h-60 rounded-2xl p-3 "
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
                  #{hashTag}
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
      ))}
    </div>
  );
}
