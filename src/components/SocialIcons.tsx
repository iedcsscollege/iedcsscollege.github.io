import * as React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
interface SocialIconsProps {}

const SocialIcons: React.FC<SocialIconsProps> = () => {
  return (
    <div className="flex flex-col w-full h-full justify-between text-[#7f3b9e] text-2xl">
      <a target="”_blank”" href="https://www.instagram.com/iedcsscollege/">
        <FaInstagram className="hover:scale-110 transition-all duration-500"/>
      </a>
      <a target="”_blank”" href="https://www.facebook.com/iedcsscollege">
        <FaFacebook className="hover:scale-110 transition-all duration-500"/>
      </a>
      <a
        target="”_blank”"
        href="https://www.linkedin.com/in/iedc-ss-college-9574b6237/"
      >
        <FaLinkedinIn className="hover:scale-110 transition-all duration-500"/>
      </a>
      <a
        target="”_blank”"
        href="https://www.youtube.com/channel/UChYMaX62qlvPSNgenUbiVbw"
      >
        <FaYoutube className="hover:scale-110 transition-all duration-500"/>
      </a>
    </div>
  );
};

export default SocialIcons;
