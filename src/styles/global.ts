import { StyleSheet } from "react-native";

// Primary color: blue (hex: #08101D)
// Secondary color: light-blue (hex: #70C1F5)
// Secondary B color: light-blue (hex: #6EC1E4)

// Text A color: gray (hex: #54595F)
// Text B color: gray (hex: #7A7A7A)

// FONT "UniNeue", Sans-serif

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F6F2",
  },
  text: {
    fontSize: 20,
    color: "#08101D",
    fontFamily: "UniNeue",
  },
});

export default styles;
