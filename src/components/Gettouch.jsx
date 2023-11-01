import { LuPartyPopper } from "react-icons/lu";

import Logo from "/email.webp";

const Gettouch = () => {
  return (
    <div className="max-w-3xl px-4 ">
      <div className="flex items-center gap-x-3 ">
        <LuPartyPopper className="text-black text-lg" />
        <h2 className="text-lg font-manrope text-primary">Get in touch</h2>
      </div>
      <div className="bg-[#25282b] p-6 box rounded-lg mt-4">
        <img src={Logo} width={50} height={50} alt="emails" />
        {/* <LuMails className="text-lg text-black " /> */}
        <h2 className="font-manrope font-semibold text-gray-200 pt-4">Drop me an Email</h2>
        <a href="mailto:muhamadervin34@gmail.com" aria-label="link gmail">
          <span
            className="font-manrope text-lg 
        text-text-gray-400 hover:text-gray-500"
          >
            muhamadervin34@gmail.com
          </span>
        </a>
        <p className="font-manrope text-md text-gray-300 w-9/12 mt-3">Expect my rapid and eager reply-your message won`t be kept waiting! </p>
      </div>
    </div>
  );
};

export default Gettouch;
