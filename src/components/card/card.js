import React from "react";
import Avatar from "../avatar/avatar";
import Social from "../social/social";
import './Card.css'
function Card() {
      return(
        <>
        <div className="bg"></div>
        <div className="card">
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 h-full w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100">
        <Avatar Photo="/Images/face.png" name="Morteza Taghavi" job="FullStack Developer" />
        <Social instagram="https://instagram.com/fullstackcoding.ir" facebook="https://github.com/morvism" telegram="https://t.me/mortezataqavii" />
        </div> 
      </div>
      </>
      )
}

export default Card;