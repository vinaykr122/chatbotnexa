import React from "react";
import vyom from "./team-img/WhatsApp Image 2024-08-27 at 15.50.26_08ad685a.jpg";
import vinay from "./team-img/WhatsApp Image 2024-08-27 at 15.45.37_240cec50.jpg";
import pri from "./team-img/WhatsApp Image 2024-08-27 at 16.42.30_224f69c1.jpg";

function TeamM() {
  return (
    <div className="flex flex-coloum gap-10">
      <div className="w-1/6 border-2 rounded-lg ">
        <img src={pri} alt="vyom" className="w-full" />
        <h1 className="font-bold">Presenter</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          voluptatum pariatur odit exercitationemim dolorem autem omnis iure
          tempora!
        </p>
      </div>
      <div className="w-1/6 border-2 rounded-lg ">
        <img src={vinay} alt="vyom" className="w-full" />
        <h1 className="font-bold">Developer Back-end</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          voluptatum pariatur odit exercitationemim dolorem autem omnis iure
          tempora!
        </p>
      </div>
      <div className="w-1/6 border-2 rounded-lg ">
        <img src={vyom} alt="vyom" className="w-full" />
        <h1 className="font-bold">Developer Front-end</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          voluptatum pariatur odit exercitationemim dolorem autem omnis iure
          tempora!
        </p>
      </div>
    </div>
  );
}

export default TeamM;
