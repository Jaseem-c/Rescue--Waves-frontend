import React, { useEffect, useRef, useState } from "react";
import "./ChatBox.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPaperPlane, faX } from "@fortawesome/free-solid-svg-icons";
import { getMessagesApi, sendMessageApi } from "../Services/allApi";


function Chatbox() {
  const [chat, setChat] = useState([]);
  const [showChatBox, setShowChatBox] = useState(false);
  const [messages, setMessage] = useState({
    senderId: "",
    senderName: "",
    receiverId: "66d33d2b9134c02ecc65fb7f",
    message: "",
  });

  const [count, setCount] = useState(1);

  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };
  if (count === 1) {
    const userString = sessionStorage.getItem("existingUser");
    const user = JSON.parse(userString);
    console.log(user);
    setMessage({
      ...messages,
      senderId: user._id,
      senderName: user.username,
    });
    setCount(2);
  }

  useEffect(() => {
    viewMessage();
  }, []);

  const viewMessage = async () => {
    try {
      const senderId=messages?.senderId
      const recievrId='66d33d2b9134c02ecc65fb7f'
      const response = await getMessagesApi(senderId,recievrId)
      setChat(response.data);
    } catch (error) {}
  };

  const sentMessage = async () => {
    try {
      const response = await sendMessageApi(messages)
      if (response.status >= 200 && response.status <= 300) {
        viewMessage();
        setMessage({
          ...messages,
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <span
        className={`message_icon ${
          showChatBox ? "d-none" : ""
        } position-fixed bottom-0 end-0 mb-3 me-3`}
        onClick={() => setShowChatBox(true)}
      >
        <FontAwesomeIcon icon={faMessage} />
      </span>
      <div
        className={`chat_box ${
          showChatBox ? "show" : ""
        } position-fixed bottom-0 end-0`}
      >
        <div className="chat_header position-relative ">
          <p className="text-center text-white poppins-semibold">
            Chat with Admin
          </p>
          <span
            className="position-absolute end-0 top-0 text-white close_btn mt-2 me-3"
            onClick={() => setShowChatBox(false)}
          >
            <FontAwesomeIcon icon={faX} />
          </span>
        </div>
        <div className="chat_body poppins-regular">
          {chat.length >= 0 ? (
            chat.map((i) => (
              <>
                {i?.senderId !== messages.senderId ? (
                  <>
                    <div className="admin_chat">
                      <p>
                        <div className="admin_title">Admin</div>
                        {i?.message}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="user_chat">
                      <p>{i?.message}</p>
                    </div>
                  </>
                )}
              </>
            ))
          ) : (
            <h6>You didn't got any messages</h6>
          )}

          <AlwaysScrollToBottom />
        </div>
        <div className="chat_input">
          <input
            type="text"
            placeholder="Message"
            value={messages.message}
            onChange={(e) =>
              setMessage({
                ...messages,
                message: e.target.value,
              })
            }
          />
          <div className="sent_icon">
          <FontAwesomeIcon icon={faPaperPlane} onClick={() => sentMessage()} />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbox;
