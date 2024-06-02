const facebookURL = `https://www.facebook.com/officialfatimastore`;

export function HeroSection() {
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center px-4 py-0 lg:px-6">
          <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Organize your kitchen life from Fatima Crockery's.
          </h1>

          <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full border p-2">
            <p className="text-xs font-medium md:text-sm">
              You want to see more items then visit{" "}
              <span className="ml-2 cursor-pointer font-bold">
                <a href={facebookURL} target="_blank">
                  Fatima Crockery's
                </a>{" "}
              </span>
              facebook page &rarr;
            </p>
          </div>
          <p className="mt-8 max-w-3xl text-lg text-gray-700">
            Transform your kitchen into a haven of organization and efficiency
            with Fatima Crockery's premium collection. From elegant dishware to
            innovative storage solutions, Fatima Crockery's products are crafted
            to meet all your culinary needs. Say goodbye to clutter and hello to
            a beautifully organized kitchen with Fatima Crockery's.
          </p>

          <div className="mt-8"></div>
        </div>
        <div className="rounded-lg bg-gray-200 p-4">
          <img
            className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc1fHx0ZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
