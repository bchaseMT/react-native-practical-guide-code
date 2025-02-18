const { Pressable } = require("react-native");

function OutlinedButton({ children }) {
  return <Pressable<button className="btn btn-outline-primary">{children}</button>
    
}