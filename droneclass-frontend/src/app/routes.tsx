import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Auth } from '../pages/Auth'
import { Cursos } from '../pages/Cursos'
import { Builds } from '../pages/Builds'
import { DroneWork } from '../pages/DroneWork'
import { Loja } from '../pages/Loja'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/builds" element={<Builds />} />
      <Route path="/droneWork" element={<DroneWork />} />
      <Route path="/Loja" element={<Loja />} />
    </Routes>
  )
}
