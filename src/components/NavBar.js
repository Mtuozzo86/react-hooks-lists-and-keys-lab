import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const anchorTags = links.map(elem => {
    return <a href={"#" + elem} key={elem}>{elem}</a>
  })

  return <nav>
    {/* display an <a> tag for each link here */}
    {anchorTags}
    </nav>;
}

export default NavBar;
