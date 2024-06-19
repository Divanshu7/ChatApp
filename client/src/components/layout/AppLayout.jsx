import React from "react";
import Header from "./Header";
import Title from "../../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";
import { samplechats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";

const AppLayout = () => (WrappedComponent) => {
  return (prop) => {

    const params=useParams();

    const chatId=params.chatId;
    return (
      <>
        <Title />
        <Header />
        <Grid container direction="row" height="calc(100vh - 4rem)">
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <ChatList
              chats={samplechats}
              chatId={chatId}
              newMessagesAlert={[{ chatId, count: 4 }]}
              onlineUsers={["1","2"]}

            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...prop} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            sx={{
              display: { xs: "none", sm: "block" },
              padding: "2rem",
              bgcolor: "#DAC0A3",
            }}
          >
            third
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
