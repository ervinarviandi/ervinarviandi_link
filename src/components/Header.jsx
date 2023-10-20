import Logo from "/avatar-ervin.webp";
import "animate.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import "tippy.js/themes/translucent.css";
import "tippy.js/animations/scale-extreme.css";

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-center  ">
        <div className="bg-gradient-to-r from-pink-200 to-purple-400 rounded-full mt-10 overflow-hidden">
          <Tippy className="font-manrope font-bold animate__animated animate__rubberBand tippy-box" content="Hy 👋 i&#39;m ervin" theme="tomato" animation="scale-extreme" placement="top-start" duration={(0, 1000)}>
            <img src={Logo} width={120} height={120} alt="profile" className=" hover:scale-125 duration-300 cursor-pointer " />
          </Tippy>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="font-manrope text-center font-semibold text-2xl text-black mb-3">Ervin Arviandi</h1>
        <span className="font-manrope text-md text-gray-600 flex justify-center">Dompu, Indonesia . he/him</span>
        <p className="font-manrope text-lg text-center text-primary mt-4">Seasoned software engineer especially in frontend side, with a passion for creating pixel-perfect web experiences.</p>
      </div>
    </div>
  );
};

export default Header;
