import Mycomponent from "./mycomponent"
import pointlessHoc from "./pointlessHoc"

  function App() {
  function send() {
    window.alert("hey Im send function")
  }

  return <div>
    <Mycomponent>
      <h1>This is Heading 😂😂</h1>
      <button>Hey there Press ❤️</button>
    </Mycomponent>
  </div>
}

export default pointlessHoc(App)