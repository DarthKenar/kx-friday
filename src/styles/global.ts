import { StyleSheet } from "react-native";

// Primary color: blue (hex: #08101D)
// Secondary color: light-blue (hex: #70C1F5)
// Secondary B color: light-blue (hex: #6EC1E4)

// Text A color: gray (hex: #54595F)
// Text B color: gray (hex: #7A7A7A)

// FONT "UniNeue"

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F6F2",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9F6F2",
  },
  options: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    width: "100%",
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: "#08101D",
    fontFamily: "UniNeue",
  },
  text_header: {
    fontSize: 20,
    color: "#F9F6F2",
    fontFamily: "UniNeue",
  },
  link_text: {
    color: "#F9F6F2",
    textAlign: "center",
    fontFamily: "UniNeue",
  },
  link_container: {
    padding: 10,
    borderRadius: 5,
    width: 150,
  },
  link_container_no_available: {
    backgroundColor: "#7A7A7A",
    padding: 10,
    borderRadius: 5,
    width: 150,
  },
  logo: {
    width: 100,
    height: 100,
  },
  ask: {
    fontSize: 16,
    color: "#08101D",
    fontFamily: "UniNeue",
  },
  logo_header: {
    flex: 1,
    width: 30,
    height: 30,
  },
});

export default styles;
