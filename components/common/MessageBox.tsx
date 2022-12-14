import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

const MessageBox = ({ data, matchUser, translating, langState }: any) => {
  console.log(translating, langState);
  return (
    <div
      className={
        data.sender === matchUser.current ? "sender-chat" : "user-chat"
      }>
      <p>{data.sender === matchUser.current ? "stranger" : "me"}:</p>
      <div>
        <p>{data.msg}</p>
        {translating && langState && <BiLoaderAlt />}
        {"translation" in data &&
          data.sender === matchUser.current &&
          !langState && (
            <p className="mt-3 italic text-sm">{data.translation}</p>
          )}
      </div>
    </div>
  );
};

export default MessageBox;
