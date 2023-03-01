import { Button } from "@mui/material"
import GoogleLogin from "react-google-login";
import { ResponsiveButton } from "../Responsive";
import { ResponsiveGoogleLogin } from "./style";




const GoogleButton = () => {
  return (
    <ResponsiveButton>
      <ResponsiveGoogleLogin
        clientId="test"
        buttonText="signin by google"
      />
    </ResponsiveButton>
  )
}

export default GoogleButton;