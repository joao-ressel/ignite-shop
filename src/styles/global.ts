import { globalCss, styled } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    backgroundColor: "$gray900",
    "-webkit-font-smoothing": "antialiased",
  },
  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
});

export const Img = styled("img", {
  height: "auto",
});
