import Typography from "typography"
import deYoungTheme from "typography-theme-de-young"

//delete deYoungTheme.googleFonts

const typography = new Typography(deYoungTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
