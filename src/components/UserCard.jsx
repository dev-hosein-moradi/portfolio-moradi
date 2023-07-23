import React from "react";
import hosein from "../assets/hosein.jpg";

const UserCard = () => {
  return (
    <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
      <div className="flex flex-row items-center justify-start font-medium text-2xl">
        <img
          className="w-16 h-16 rounded-full object-fill"
          alt="hosein moradi"
          src={hosein}
        />
        <h1 className="ml-5">hosein moradi</h1>
      </div>
      <div className="my-4">
        <p className="text-gray-400">
          To cooperate in the project or to hire me, you can contact me in the
          following ways.
        </p>
      </div>
      <p className="green-text-gradient">moradih7379@gmail.com</p>
      <div className="flex flex-row items-center justify-between mt-2">
        <a
          className="linkedin-gradient rounded-full py-2 min-w-[80px] text-center text-sm"
          href={`https://www.linkedin.com/in/hosein-moradi-4a3251232/`}
          target="_blank"
        >
          Linkdin
        </a>
        <a
          className="black-gradient rounded-full py-2 min-w-[80px] text-center text-sm"
          href={`https://github.com/dev-hosein-moradi`}
          target="_blank"
        >
          Github
        </a>
        <a
          className="telegram-gradient rounded-full py-2 min-w-[80px] text-center text-sm"
          href={`https://t.me/M_hosein7`}
          target="_blank"
        >
          Telegram
        </a>
      </div>
    </div>
  );
};

export default UserCard;
