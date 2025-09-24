import React, { useState } from "react";

const ChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState("start");

  const toggleChat = () => setIsOpen(!isOpen);
  const goToMessages = () => setView("messages");
  const goBack = () => setView("start");

  return (
    <>
      {!isOpen && (
        <button onClick={toggleChat} className="chat-toggle-btn">
          Chat
        </button>
      )}

      {isOpen && (
        <div className="chat-modal-overlay" onClick={toggleChat}>
          <div className="chat-modal" onClick={(e) => e.stopPropagation()}>
            <div className="chat-header">
              <button className="close-btn" onClick={toggleChat}>
                X
              </button>
              <h3>Live Chat</h3>
              {view === "start" && (
                <>
                  <p>We are live and ready to chat with you now.</p>
                  <p>Say something to start a live chat.</p>
                </>
              )}
            </div>

            <div className="chat-body">
              {view === "start" && (
                <>
                  <div className="new-conversation">
                    <span>Start a new chat</span>
                    <p>New Conversation</p>
                    <p>We typically reply in a few minutes</p>
                  </div>
                  <div className="recent">
                    <span>Recent</span>
                    <p>No recent conversations</p>
                  </div>
                </>
              )}

              {view === "messages" && (
                <>
                  <div className="messages-header">
                    <button onClick={goBack}>Back</button>
                    <span>Messages</span>
                  </div>
                  <div className="messages-content">
                    <p>No messages yet.</p>
                    <div className="new-conversation">
                      <span>Start a new chat</span>
                      <p>New Conversation</p>
                      <p>We typically reply in a few minutes</p>
                    </div>
                    <div className="recent">
                      <span>Recent</span>
                      <p>No recent conversations</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="chat-footer">
              {view === "start" ? (
                <button className="chat-btn" onClick={goToMessages}>
                  Chat
                </button>
              ) : (
                <button className="back-btn" onClick={goBack}>
                  Back
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatModal;
