"use client";

export default function Home() {
  return (
    <div className="w-[624px]  m-auto ">
      <h1 className="font-semibold text-[36px] mb-5">Contact us</h1>
      <p className="text-justify text-[#696A75]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam
      </p>
      <div className="flex justify-between">
        <div className="mt-5 p-4 border-gray-200 border-2 rounded-md w-[294px]">
          <h2 className="text-[24px] font-semibold">Address</h2>
          <p className="text-[18px] text-[#696A75]">
            1328 Oak Ridge Drive, Saint Louis, Missouri
          </p>
        </div>
        <div className="mt-5 p-4 border-gray-200 border-2 rounded-md w-[294px]">
          <h2 className="text-[24px] font-semibold">Contact</h2>
          <p className="text-[18px] text-[#696A75]">
            313-332-8662 info@email.com
          </p>
        </div>
      </div>

      <div className="bg-[#F6F6F7] w-[643px] h-[440px] pl-[35px] pt-[29px] pr-[130px] mt-10 mb-40">
        <h3 className="font-bold mb-5">Leave a Message</h3>
        <div className="flex justify-between">
          <input
            className="w-[225px] h-[38px] broder-gray-400 border-2 p-2 mb-5"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="w-[225px] h-[35px] broder-gray-400 border-2 p-2 mb-5"
            type="text"
            placeholder="Your Email"
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          className="w-full broder-gray-400 border-2 p-2 mb-5"
        />
        <textarea
          className="w-full broder-gray-400 border-2 p-2 mb-5 h-[134px]"
          placeholder="Write a message"
        ></textarea>
        <div className="w-[130px] h-[40px] bg-[#4B6BFB] p-2 text-white rounded-md">
          Send Message
        </div>
      </div>
    </div>
  );
}
