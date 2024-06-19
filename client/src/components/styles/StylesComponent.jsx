import { styled } from "@mui/material";
import { Link as linkComponent} from "react-router-dom";

const VisuallyHiddenInput = styled("input")({
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: 1,
});

export const Link=styled(linkComponent)`
{
    text-decoration:none;
    color:black;
    padding:1rem;
}`
export { VisuallyHiddenInput };