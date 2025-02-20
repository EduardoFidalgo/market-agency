import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DrawerAppBar from './components/DrawerAppBar/DrawerAppBar'
import HeroSection from './sections/HeroSection'
import Highlights from './sections/Highlights'
import AboutSection from './sections/AboutSection'
import ServiceSection from './sections/ServiceSection'
import PriceSection from './sections/PriceSection'
import EmployeeSection from './sections/EmployeeSection'
import FooterSection from './sections/FooterSection'
import { Box } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DrawerAppBar />
      <HeroSection />
      <Highlights />
      <Box sx={{ mt: 10 }} />
      <AboutSection />
      <Box sx={{ mt: 10 }} />
      <ServiceSection />
      <Box sx={{ mt: 10 }} />
      <PriceSection />
      <Box sx={{ mt: 10 }} />
      <EmployeeSection />
      <Box sx={{ mt: 10 }} />
      <FooterSection />
    </>
  )
}

export default App
