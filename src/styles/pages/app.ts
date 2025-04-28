import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  minHeight: "100vh",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: "1180px",
  margin: "0 auto",
  justifyContent: "space-between",
  display: "flex",

  button: {
    background: "$gray800",
    border: "none",
    height: "48px",
    width: "48px",
    cursor: "pointer",
    color: "$white",
    borderRadius: "6px",
  },
});
