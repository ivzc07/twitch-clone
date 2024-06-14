import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar"
function App() {
  

  return (
    <main className="w-full min-h-screen grid grid-cols-[20%_1fr] grid-rows-[5rem_1fr] bg-[#0e0e0f] ">
      <NavBar />
      <SideBar/>
    </main>
      
  )
}

export default App
