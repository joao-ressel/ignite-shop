import { styled } from "..";

export const Overlay = styled("div", {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 999,
});

export const Modal = styled("aside", {
  position: "fixed",
  top: 0,
  right: 0,
  width: 480,
  height: "100vh",
  background: "$gray800",
  padding: "4rem",
  display: "flex",
  flexDirection: "column",
  zIndex: 1000,
  boxShadow: "-4px 0px 30px 0px rgba(0, 0, 0, 0.80)",
});

export const Title = styled("h2", {
  fontSize: "1.25rem",
  fontWeight: "bold",
  marginBottom: "2rem",
  color: "$gray100",
});

export const CloseButton = styled("button", {
  background: "transparent",
  border: "none",
  color: "$white",
  fontSize: "1.5rem",
  alignSelf: "flex-end",
  cursor: "pointer",
});

export const Product = styled("div", {
  display: "flex",
  alignItems: "center",
  marginBottom: "1.5rem",
  gap: "1rem",
});

export const ProductImage = styled("div", {
  minWidth: 80,
  height: 80,
  borderRadius: 8,
  background: "$gradient",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

export const ProductInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  span: {
    color: "$gray300",
    fontSize: "1rem",
  },

  strong: {
    fontSize: "1rem",
    color: "$gray100",
  },

  button: {
    background: "transparent",
    border: "none",
    color: "$green500",
    marginTop: "0.5rem",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: "bold",
    textAlign: "end",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const Footer = styled("footer", {
  marginTop: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const Quantity = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  color: "$gray300",
  fontSize: "1rem",
});

export const Total = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  fontWeight: "bold",
  fontSize: "1.25rem",
  color: "$gray100",
});

export const CheckoutButton = styled("button", {
  marginTop: "1rem",
  backgroundColor: "$green500",
  border: "none",
  borderRadius: 8,
  padding: "1rem",
  color: "$white",
  fontWeight: "bold",
  fontSize: "1rem",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$green300",
  },
});
