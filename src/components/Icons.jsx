import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaThreads } from "react-icons/fa6";
import { SiGitbook } from "react-icons/si";

// const title = "install tailwindcss and its peer dependecies then generate your "

const Icons = () => {
  return (
    <div
      className="md:max-w-7xl 
    px-4"
    >
      <div className="flex justify-center items-center gap-x-3 mt-7">
        <div className="bg-white hover:bg-[#d3f26a] duration-300 ease-in-out border-primary border  rounded-full p-2 hover:shadow-xl">
          <a href="https://github.com/ervinarviandi" aria-label="github link">
            <AiFillGithub className="text-2xl text-black" />
          </a>
        </div>
        <div className="bg-white hover:bg-[#d3f26a] duration-300 ease-in-out border-primary border  rounded-full p-2 hover:shadow-xl">
          <a
            href="instagram.com/ervinarviandi       
          "
            aria-label="instagram link"
          >
            <AiOutlineInstagram className="text-2xl text-black" />
          </a>
        </div>
        <div className="bg-white hover:bg-[#d3f26a] duration-300 ease-in-out border-primary border  rounded-full p-2 hover:shadow-xl">
          <a href="https://www.threads.net/@ervinarviandi" aria-label="threads link">
            <FaThreads className="text-2xl text-black" />
          </a>
        </div>
        <div className="bg-white hover:bg-[#d3f26a] duration-300 ease-in-out border-primary border  rounded-full p-2 hover:shadow-xl">
          <a href="https://app.gitbook.com/o/vXWd1hsKDlQ1x5wo7ASa/s/AoqsT3g63kOfLrnoT3nF/untitled/astro-introduction" aria-label="gitbook link">
            <SiGitbook className="text-2xl text-black" />
          </a>
        </div>
      </div>
      <hr className="border-gray-300 border rounded-full my-5 border-solid" />
    </div>
  );
};

export default Icons;
