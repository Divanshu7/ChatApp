import React, { useState } from "react";
import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { useFileHandler, useInputValidation } from "6pp";
import { VisuallyHiddenInput } from "../components/styles/StylesComponent";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("");
  const password = useInputValidation("");
  const avatar = useFileHandler("single");

 

  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(0,194,217,1) 22%, rgba(29,0,199,1) 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          marginBottom: 0,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: 3,
            position: "relative",
            overflow: "hidden",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              overflowY: "scroll",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {isLogin ? (
              <>
                <Typography>Login</Typography>
                <form
                  style={{
                    width: "100%",
                    marginTop: "1rem",
                  }}
                  onSubmit={handleLogin}
                >
                  <TextField
                    required
                    fullWidth
                    label="User Name"
                    margin="normal"
                    variant="outlined"
                    value={username.value}
                    onChange={username.changeHandler}
                  />
                  <TextField
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    value={password.value}
                    onChange={password.changeHandler}
                    sx={{ marginTop: "1rem" }}
                  />
                  <Button
                    sx={{ marginTop: "1rem" }}
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Login
                  </Button>
                  <Typography textAlign="center" m="1rem">
                    or
                  </Typography>
                  <Button variant="text" onClick={toggleLogin} fullWidth>
                    Sign up Instead
                  </Button>
                </form>
              </>
            ) : (
              <>
                <Typography>Sign Up</Typography>
                <form
                  style={{
                    width: "100%",
                    marginTop: "1rem",
                  }}
                  onSubmit={handleSignUp}
                >
                  <Stack position="relative" margin="auto">
                    <Avatar
                      sx={{
                        width: "4rem",
                        height: "4rem",
                        objectFit: "contain",
                      }}
                      src={avatar.preview}
                    />

                    <IconButton
                      sx={{
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                      }}
                      component="label"
                    >
                      <CameraAltIcon />
                      <VisuallyHiddenInput
                        type="file"
                        onChange={avatar.changeHandler}
                      />
                    </IconButton>
                  </Stack>

                  <TextField
                    required
                    fullWidth
                    label="Name"
                    margin="normal"
                    variant="outlined"
                    value={name.value}
                    onChange={name.changeHandler}
                  />
                  <TextField
                    required
                    fullWidth
                    label="User Name"
                    margin="normal"
                    variant="outlined"
                    value={username.value}
                    onChange={username.changeHandler}
                  />
                  <TextField
                    required
                    fullWidth
                    label="Bio"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    value={bio.value}
                    onChange={bio.changeHandler}
                    sx={{ marginTop: "1rem" }}
                  />
                  <TextField
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    value={password.value}
                    onChange={password.changeHandler}
                    sx={{ marginTop: "1rem" }}
                  />
                  <Button
                    sx={{ marginTop: "1rem" }}
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                  <Typography textAlign="center" m="1rem">
                    or
                  </Typography>
                  <Button variant="text" onClick={toggleLogin} fullWidth>
                    Login Instead
                  </Button>
                </form>
              </>
            )}
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
