import React from 'react'

const ChatTopbarFeatures = ({icon, textcolor, hovertext}) => {
  return (
    <button className={`border border-gray-700/60 p-3 rounded-full hover:bg-gray-800 ${textcolor} ${hovertext}`}>
      {icon}
    </button>
  );
}

export default ChatTopbarFeatures