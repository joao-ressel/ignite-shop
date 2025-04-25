import { styled } from "..";

export const HomeContainer = styled("div", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: "auto",
  minHeight: 656,
});

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  height: 656,

  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    div: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },
    
    strong: {
      fontSize: "$lg",
      color: "$gray100",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },
  },
  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});

export const CartButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$green300",
  border: "none",
  height: "3rem  ",
  width: "3rem",
  borderRadius: "6px",
  cursor: "pointer",

  svg: {
    color: "$gray100",
    height: "1.5rem",
  },
});
