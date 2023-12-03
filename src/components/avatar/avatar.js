import React from "react";

const Avatar = (props) =>{
    const Photo = props.Photo
    return(
         <>
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
         <img src={Photo} alt="profile-picture" />
        </div>
        <div className="p-6 text-center">
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {props.name}
    </h4>
    <p
      className="block text-blue-600 font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
      {props.job}
    </p>
  </div>
        </>
    )

}

export default Avatar;