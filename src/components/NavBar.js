import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav style={{zIndex: 2}}>
      <a key={links[0]} href= {`#${links[0]}`}>{links[0]}</a>
      <a key={links[1]} href= {`#${links[1]}`}>{links[1]}</a>
      <a key={links[2]} href= {`#${links[2]}`}>{links[2]}</a>
      

    </nav>
  )
}

export default NavBar;
