 
import pointlessHoc from "./pointlessHoc"

  function App(props) {
  function send() {
    window.alert("hey Im send function")
  }

  return <div>
 
      <h1>This is Heading 😂😂 {props.anotherprops}</h1>
      <button>Hey there Press ❤️</button>
 
  </div>
}

export default pointlessHoc(App)