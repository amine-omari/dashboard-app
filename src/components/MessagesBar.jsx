import React from "react";
import MessagePreview from "./MessagePreview";

const MessagesBar = () => {
  const MESSAGE_IMGS_DATA = [
    {
      id: 1,
      src: "/imgs/ProfilePic1.jpg",
      name: "Mark Killerz",
      lastMessage: "it is a long established fact that a sdfsdffd sdfsdfsdf",
      time: "7:41",
      seen: false,
      notification: true,
    },
    {
      id: 2,
      src: "/imgs/ProfilePic2.jpg",
      name: "Mark Killerz",
      lastMessage: "Many desktop publishing packages",
      time: "7:41",
      seen: false,
      notification: true,
    },
    {
      id: 3,
      src: "/imgs/ProfilePic3.jpg",
      name: "Marcin Duda",
      lastMessage: "Various vesions have evolved over",
      time: "9:02",
      seen: false,
      notification: false,
    },
    {
      id: 4,
      src: "/imgs/ProfilePic4.jpg",
      name: "Wiz Clark",
      lastMessage: "it is a long established fact that a",
      time: "9:41",
      seen: true,
      notification: false,
    },
    {
      id: 5,
      src: "/imgs/ProfilePic1.jpg",
      name: "Creme Digital",
      lastMessage: "You: fireeee!",
      time: "10:30",
      seen: true,
      notification: false,
    },
    {
      id: 6,
      src: "/imgs/ProfilePic2.jpg",
      name: "Michael Dias",
      lastMessage: "You: wow, really cool",
      time: "11:24",
      seen: true,
      notification: false,
    },
    {
      id: 7,
      src: "/imgs/ProfilePic3.jpg",
      name: "Ahmed Pularizo",
      lastMessage: "Sometimes on purpose",
      time: "12:09",
      seen: false,
      notification: false,
    },
    {
      id: 8,
      src: "/imgs/ProfilePic4.jpg",
      name: "Jacob Ben",
      lastMessage: "it is a long established fact that a",
      time: "12:58",
      seen: false,
      notification: false,
    },
    {
      id: 9,
      src: "/imgs/ProfilePic1.jpg",
      name: "Mark Killerz",
      lastMessage: "Many desktop publishing packages publishing publishing",
      time: "7:41",
      seen: false,
      notification: true,
    },
    {
      id: 10,
      src: "/imgs/ProfilePic2.jpg",
      name: "Mark Killerz",
      lastMessage: "Many desktop publishing packag espacka gespackages",
      time: "7:41",
      seen: true,
      notification: false,
    },
  ];

  return (
    <div className="overflow-auto">
      {MESSAGE_IMGS_DATA.map(
        ({ id, src, name, lastMessage, time, seen, notification }) => (
          <MessagePreview
            key={id}
            src={src}
            name={name}
            lastMessage={lastMessage}
            time={time}
            seen={seen}
            notification={notification}
          />
        )
      )}
    </div>
  );
};

export default MessagesBar;
