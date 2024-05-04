import { Nav } from './components/NavBar.jsx'
import './App.css'

function App() {

  return (
    <>
    <header>
      <Nav></Nav>
    </header>
    <body className=' p-4'>
      <div className=' grid grid-cols-5 gap-5 grow'>
        <div className=" card bg-transparent"></div>
        <div className=" card col-span-4 bg-red-600">article</div>
        <div className=" card col-span-2">article</div>
        <div className=" card col-span-3">article</div>
        <div className=" card ">article</div>
        <div className=" card ">article</div>
        <div className=" card ">article</div>
        <div className=" card col-span-2 ">article</div>
      </div>
    </body>
    </>
  )
}

export default App
