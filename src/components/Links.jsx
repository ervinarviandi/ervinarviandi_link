import { PiLinkBreak } from "react-icons/pi";
import { BiPin, BiRightArrowAlt, BiCoffee } from "react-icons/bi";
import { FaBlog } from "react-icons/fa";

const Links = () => {
  return (
    <div className="w-full md:max-w-7xl px-4 mx-auto">
      <div className="flex items-center gap-x-3">
        <PiLinkBreak className="text-lg text-black" />
        <p className="font-manrope text-lg text-primary">Links</p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 gap-5 mt-4">
          <div className="flex flex-col">
            <a href="https://ervinarvian.vercel.app/" aria-label="right icons">
              <div className="border-2 border-gray-200 p-4 rounded-lg relative hover:bg-gradient-to-r from-green-200 to-purple-300 duration-300 ease-in" aria-label="link pembungkus personal portfolio">
                <div className="flex  items-center gap-x-3">
                  <BiPin className="text-gray-400 text-lg" />
                  <h1 className="font-manrope text-lg text-black md:w-full w-8/12">Personal Website & Portfolio</h1>
                  <div className="absolute right-10">
                    <BiRightArrowAlt className="text-lg text-green-300" />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="flex flex-col">
            <a href="https://app.gitbook.com/o/vXWd1hsKDlQ1x5wo7ASa/s/AoqsT3g63kOfLrnoT3nF/untitled/astro-introduction">
              <div className="border-2 border-gray-200 p-4 rounded-lg relative hover:bg-gradient-to-r from-green-200 to-purple-300 duration-300 ease-in" aria-label="link pembungkus blog">
                <div className="flex  items-center gap-x-3">
                  <FaBlog className="text-gray-400 text-lg" />
                  <h1 className="font-manrope text-lg text-black">My Blog </h1>
                  <div className="absolute right-10">
                    <BiRightArrowAlt className="text-lg text-green-300" />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="flex flex-col">
            <a href="https://trakteer.id/ervinarviandi" aria-label="trakteer link">
              <div className="border-2 border-gray-200 p-4 rounded-lg relative  hover:bg-gradient-to-r from-green-200 to-purple-300 duration-300 ease-in" aria-label="link pembungkus buy me a cup coffee">
                <div className="flex  items-center gap-x-3">
                  <BiCoffee className="text-gray-400 text-lg" />
                  <h1 className="font-manrope text-lg text-black">Buy me a Cup of Coffee </h1>
                  <div className="absolute right-10">
                    <BiRightArrowAlt className="text-lg text-green-300" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <hr className="border-gray-300 border rounded-full my-5 border-solid" />
      </div>
    </div>
  );
};

export default Links;
