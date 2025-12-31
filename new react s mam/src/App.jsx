import "./App.css"
import Title from "./title.jsx";
import msgBox from "./msgbox.jsx";




function App() {

  return (
    <>
      <msgBox userName ="alok" textColor = "yellow"/>
      <Title title="pen" price={10} />
      <Title title="phone" price={10000} />
      <Title title="pc" price={40000} />
    </>
  )
}

export default App