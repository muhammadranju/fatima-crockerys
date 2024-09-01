const facebookURL = `https://www.facebook.com/officialfatimastore`;

export function HeroSection() {
  return (
    <div className="relative w-full">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center px-6 py-0 lg:px-6">
          <h1 className="mt-8  text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            ফাতিমা ক্রোকারিজ থেকে সাজিয়ে নিন আপনার রান্নাঘর😊.
          </h1>

          <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full p-2">
            <span className="inline-flex h-full animate-background-shine items-center justify-center rounded-full border border-gray-800 bg-[linear-gradient(110deg,#082f49,45%,#0ea5e9,55%,#082f49)] bg-[length:250%_100%] px-5 py-3 text-2xl font-medium text-gray-200">
              <p className="text-lg font-medium md:text-sm">
                আপনি আরো আইটেম দেখতে চান তারপর দেখুন{" "}
                <strong className="ml-2 text-xxl cursor-pointer font-bold">
                  <a href={facebookURL} target="_blank">
                    <span className="inline-flex animate-background-shine bg-[linear-gradient(110deg,#ffffff,45%,#0ea5e9,55%,#ffffff)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent">
                      ফাতিমা ক্রোকারিজ
                    </span>
                  </a>
                </strong>
                <span className="l=ml2"> facebook page &rarr;</span>
              </p>
            </span>
          </div>
          <p className="mt-8 max-w-3xl text-lg ">
            ফাতিমা ক্রোকারিজের প্রিমিয়াম সংগ্রহের সাথে আপনার রান্নাঘরকে সংগঠন
            এবং দক্ষতার আশ্রয়স্থলে রূপান্তর করুন। মার্জিত ডিশওয়্যার থেকে
            উদ্ভাবনী স্টোরেজ সমাধান পর্যন্ত, ফাতিমা ক্রোকারিজের পণ্যগুলি আপনার
            সমস্ত রন্ধনসম্পর্কীয় চাহিদা মেটাতে তৈরি করা হয়েছে। ফাতিমা
            ক্রোকারিজের সাথে একটি সুন্দর সংগঠিত রান্নাঘরে বিশৃঙ্খলা এবং হ্যালোকে
            বিদায় জানান।
          </p>

          <div className="mt-8"></div>
        </div>
        <div className="rounded-lg bg-slate-700 p-[3px]">
          <img
            className="w-full rounded-lg bg-gray-50 object-cover lg:h-[600px]"
            src="../../hero-image.jpg"
            alt="ফাতিমা ক্রোকারিজের প্রিমিয়াম সংগ্রহের সাথে আপনার রান্নাঘরকে সংগঠন
            এবং দক্ষতার আশ্রয়স্থলে রূপান্তর করুন।"
          />
        </div>
      </div>
    </div>
  );
}
