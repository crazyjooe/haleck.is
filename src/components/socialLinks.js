import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { rhythm, primaryColor, supportColor } from "../utils/typography"
import SOCIAL from "../utils/social"
import Radium from "radium"

class SocialLinks extends React.Component {
  render() {
    return (
      <div style={style.container}>
        {SOCIAL.map(s => (
          <div style={style.socialElement}>
            <a href={s.url} style={[style.socialLink]} key={s.kind}>
              <FontAwesomeIcon icon={s.icon} title={`My ${s.kind}`} />
            </a>
          </div>
        ))}
      </div>
    )
  }
}

const containerStyle = {
  display: "flex",
  flexDirection: "row",
}

const socialElementStyle = {
  marginRight: rhythm(0.5),
  float: "right",
}

const socialLinkStyle = {
  color: supportColor,
  textDecoration: "none",
  ":hover": { textDecoration: "none", color: primaryColor },
}

const style = {
  container: containerStyle,
  socialElement: socialElementStyle,
  socialLink: socialLinkStyle,
}

export default Radium(SocialLinks)
