import React from "react";
import ChatItem from "../../shared/ChatItem";
import { Stack } from "@mui/material";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction={"column"}>
      {chats.map((data, index) => {
        const { avatar, _id, name, groupChat, members } = data;
        const chatNewMessagesAlert = newMessagesAlert.find(
          (alert) => alert.chatId === _id
        );
        const isOnline = members?.some((member) => onlineUsers.includes(member));
        return (
          <ChatItem
            key={_id}
            index={index}
            newMessage={chatNewMessagesAlert}
            avatar={avatar}
            name={name}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleDeleteChatOpen={handleDeleteChat}
            isOnline={isOnline}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;