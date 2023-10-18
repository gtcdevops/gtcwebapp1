import React from "react";
import Image from "next/image";
import Link from "next/link";

const Vehicles = () => {
  return (
    <div className="mx-auto justify-center flex mt-2 p-8 gap-6 flex-wrap">
      <div className="box-border h-fit w-[34rem] p-8 bg-slate-50 shadow-lg rounded-2xl">
        <div className="w-full flex justify-center">
          <Image
            src="/t-alphard.png"
            width={400}
            height={500}
            alt="Picture of the vehicle"
          />
        </div>

        <div className="flex justify-between mt-2">
          <div className="font-bold text-5xl text-slate-700 tracking-tight">
            <p className="text-[16px] text-slate-500 font-light mb-1 tracking-normal">
              FARES FROM
            </p>
            S$42
          </div>

          <div className="box-border font-bold text-2xl text-slate-600 tracking-tight leading-tight h-fit border-purple-500 border-l-2 px-5">
            5 SEATERS{" "}
            <p className="text-[18px] text-slate-500 font-light">
              LUGGAGE x <span className="font-extrabold">5</span>
            </p>
          </div>
        </div>

        <div>
          <Link
            href="/booking"
            className="flex w-100 justify-center bg-purple-700 px-20 py-3 mt-4 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            BOOK NOW
          </Link>
        </div>
      </div>

      <div className="box-border h-fit w-[34rem] p-8 bg-slate-50 shadow-lg rounded-2xl">
        <div className="w-full flex justify-center">
          <Image
            src="/t-prius.png"
            width={388}
            height={500}
            alt="Picture of the vehicle"
          />
        </div>

        <div className="flex justify-between mt-2">
          <div className="font-bold text-5xl text-slate-700 tracking-tight">
            <p className="text-[16px] text-slate-500 font-light mb-1 tracking-normal">
              FARES STARTING FROM
            </p>
            S$34
          </div>

          <div className="box-border font-bold text-2xl text-slate-600 tracking-tight leading-tight border-purple-500 border-l-2 px-5 h-fit">
            4 SEATERS{" "}
            <p className="text-[18px] text-slate-500 font-light">
              LUGGAGE x <span className="font-extrabold">2</span>
            </p>
          </div>
        </div>

        <div>
          <Link
            href="/booking"
            className="flex w-100 justify-center bg-purple-700 px-20 py-3 mt-4 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            BOOK NOW
          </Link>
        </div>
      </div>

      <div className="mx-auto box-border h-66 w-[70rem] p-8 bg-slate-50 shadow-lg rounded-2xl before:-translate-x-1/3 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-5xl before:content-[''] after:absolute after:-z-50 after:h-[180px] after:w-[180px] after:translate-x-2/3 after:bg-gradient-conic after:from-red-500 after:via-blue-200 after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-800 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-60]">
        <div className="font-bold tracking-tight text-4xl text-slate-700 text-center">
          Customised Charter Services
        </div>
        <div className="text-lg text-slate-500 text-center leading-normal mt-4">
          This service is ideal for touring around Singapore, our friendly
          drivers knows all the in's and out's of Singapore. <br></br>Enquire
          and ask about our Customised Charter Services available 24-hours
          daily. <br></br>Simply drop us an enquiry email or message us on our
          hotline to get an quote of your request.
        </div>
        <div className="flex justify-center mt-4 z-100">
          <Link
            href="/booking"
            className="flex w-100 justify-center bg-purple-700 px-20 py-3 mt-4 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            ENQUIRE NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
