import { LuPartyPopper } from "react-icons/lu";

import Logo from "/email.webp";

const Gettouch = () => {
  return (
    <div className="max-w-3xl px-4 ">
      <div className="flex items-center gap-x-3 ">
        <LuPartyPopper className="text-black text-lg" />
        <h2 className="text-lg font-sora text-primary">Get in touch</h2>
      </div>
      <div className="bg-green-200 p-6 box rounded-lg mt-4">
        <a href="">
          <img src={Logo} width={50} height={50} alt="emails" />
        </a>
        {/* <LuMails className="text-lg text-black " /> */}
        <h2 className="font-sora text-black pt-4">Drop me an Email</h2>
        <span className="font-sora text-lg text-black">muhamadervin34@gmail.com</span>
        <p className="font-sora text-md text-primary w-9/12 mt-3">Expect my rapid and eager reply-your message won`t be kept waiting! </p>
      </div>
    </div>
  );
};

export default Gettouch;