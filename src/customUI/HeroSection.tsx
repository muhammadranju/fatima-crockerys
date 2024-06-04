const facebookURL = `https://www.facebook.com/officialfatimastore`;

export function HeroSection() {
  return (
    <div className="relative w-full">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center px-6 py-0 lg:px-6">
          <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight md:text-58xl lg:text-5xl">
            ফাতিমা ক্রোকারিজ থেকে সাজিয়ে নিন আপনার রান্নাঘর😊.
          </h1>

          <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full  border p-2">
            <p className="text-xs font-medium md:text-sm">
              আপনি আরো আইটেম দেখতে চান তারপর দেখুন{""}
              <span className="ml-2 cursor-pointer font-bold">
                <a href={facebookURL} target="_blank">
                  ফাতিমা ক্রোকারিজ
                </a>
              </span>
              <span className="l=ml2"> facebook page &rarr;</span>
            </p>
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
        <div className="rounded-lg bg-gray-200 p-2">
          <img
            className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[600px]"
            src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/240461781_119337233774660_4033114008569214744_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ho3tqraOAScQ7kNvgEoOuYm&_nc_ht=scontent.fdac24-5.fna&oh=00_AYDpN6PY0hJNY9YXJCBpmsXFanCCQzB0TBKCqTZtL0ycQw&oe=666438DB"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
