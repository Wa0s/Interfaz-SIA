import { useState } from 'react'
import jinis from './assets/images.png'
import viteLogo from '/vite.svg'
import SideBar from './SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SideBar />
    </>
  )
}

export default App
