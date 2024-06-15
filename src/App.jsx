import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar"
import Content from "./components/Content"
function App() {
  

  return (
    <main className="w-full min-h-screen grid lg:grid-cols-[20%_1fr] lg:grid-rows-[5rem_1fr] sm:grid-cols-1">
      <NavBar />
      <SideBar/>
      <Content />
    </main>
      
  )
}

export default App
