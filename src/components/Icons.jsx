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
        <div className="bg-white border-primary border  rounded-full p-2 hover:shadow-xl">
          <a href="https://github.com/ervinarviandi">
            <AiFillGithub className="text-2xl text-black" />
          </a>
        </div>
        <div className="bg-white border-primary border  rounded-full p-2 hover:shadow-xl">
          <a
            href="instagram.com/ervinarviandi       
          "
          >
            <AiOutlineInstagram className="text-2xl text-black" />
          </a>
        </div>
        <div className="bg-white border-primary border  rounded-full p-2 hover:shadow-xl">
          <a href="https://www.threads.net/@ervinarviandi">
            <FaThreads className="text-2xl text-black" />
          </a>
        </div>
        <div className="bg-white border-primary border  rounded-full p-2 hover:shadow-xl">
          <a href="">
            <SiGitbook className="text-2xl text-black" />
          </a>
        </div>
      </div>
      <hr className="border-gray-300 border rounded-full my-5 border-solid" />
    </div>
  );
};

export default Icons;
