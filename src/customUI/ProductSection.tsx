import products from "../data/products.json";
const facebookURL = `https://www.facebook.com/officialfatimastore`;

export function ProductSection() {
  return (
    <div className="container mx-auto ">
      <h1 className="text-center text-3xl font-bold lg:mt-16 mt-5 lg:-mb-5">
        Example of some products | কিছু পণ্যের উদাহরণ
      </h1>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.description}
            className="rounded-md overflow-hidden mx-auto relative border  border-gray-800 p-[2.5px] backdrop-blur-3xl "
          >
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
            <div className="   rounded-md  bg-slate-950 px-2 py-1font-medium text-gray-50 backdrop-blur-3xl">
              <img
                src={product.image}
                alt="Laptop"
                className=" lg:w-fit object-cover rounded-2xl p-3 "
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
                  <div
                    className="mt-4 flex  flex-col lg:flex-row"
                    key={hashTag}
                  >
                    <span className="mb-2  rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                      #{hashTag.split(" ").join("-").toLocaleLowerCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center lg:-mt-5">
        You can find more product in our store or facebook page (
        <a
          href={facebookURL}
          target="_blank"
          className="font-semibold px-1 hover:underline hover:underline-offset-4"
        >
          Fatima Crockery
        </a>{" "}
        )
      </p>
    </div>
  );
}
