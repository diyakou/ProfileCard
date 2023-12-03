import React from "react";
import { CiInstagram,CiFacebook , } from "react-icons/ci";
import { RiTelegramLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";

const Social = (props) => {
     return(
          <div className="text-blue">
              <div className="flex justify-center p-6 pt-2 gap-7">
        <a href={props.facebook}
          className="block font-sans text-xl antialiased font-normal leading-relaxed text-zink-970t bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
         <FiGithub  />
                 </a>
        <a href={props.telegram}
          className="block font-sans text-xl antialiased font-normal leading-relaxed text-zink-970 bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
          <RiTelegramLine />
        </a>
        <a href={props.instagram}
          className="block font-sans text-xl antialiased font-normal leading-relaxed text-zink-970 bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400">
         <CiInstagram />
        </a>
      </div>
          </div>
     )
}
export default Social;