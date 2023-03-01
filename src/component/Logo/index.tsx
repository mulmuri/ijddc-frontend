import { ResponsiveIcon } from "../Responsive";

import logo from '../../asset/logo/logo.png';



const Logo = () => {
  return (
    <ResponsiveIcon>
      <img
        src={logo}
        style={{
          width: "80%",
          height: "80%"
        }}
      />
    </ResponsiveIcon>
  )
}

export default Logo;