/* O Stitches é uma alternativa ao styled componentes. tem uma API com uma escrita um pouco diferente,
o que é melhor para componentes com muitas variações. Funciona bem com o Server Side Redering no Next.
 */

import { createStitches } from "@stitches/react";

export const { config, styled, css, globalCss, keyframes, getCssText, theme, createTheme } =
  createStitches({
    theme: {
      colors: {
        white: "#fff",

        gray900: "#121212",
        gray800: "#202024",
        gray300: "#c4c4cc",
        gray100: "#e1e1e6",

        green500: "#00875f",
        green300: "#00b37e",
        gradient: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
      },

      fontSizes: {
        md: "1.125rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "2rem",
      },
    },
  });
