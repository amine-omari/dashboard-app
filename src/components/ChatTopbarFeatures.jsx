import React from 'react'

const ChatTopbarFeatures = ({icon, textcolor}) => {
  return (
    <button className={`border border-gray-700/60 p-3 rounded-full ${textcolor}`}>
      {icon}
    </button>
  );
}

export default ChatTopbarFeatures