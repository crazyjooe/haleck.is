import Typography from "typography"
import deYoungTheme from "typography-theme-de-young"
import "./global.css"

const primaryColorConst = "#5E46A4"
const secondaryColorConst = "#33cc33"
const supportColorConst = "#b3b3cc"

deYoungTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    color: primaryColorConst,
  },
  "a:hover": {
    color: secondaryColorConst,
    textDecoration: "none",
  },
})

if (typeof document !== `undefined`) {
  const root = document.documentElement
  root.style.setProperty("--primaryColor", primaryColorConst)
  root.style.setProperty("--secondaryColor", secondaryColorConst)
  root.style.setProperty("--supportColor", supportColorConst)
}

deYoungTheme.baseFontSize = 24

const typography = new Typography(deYoungTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
export const primaryColor = primaryColorConst
export const secondaryColor = secondaryColorConst
export const supportColor = supportColorConst
