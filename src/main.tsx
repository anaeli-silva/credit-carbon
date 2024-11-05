import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Router from './router/index.tsx'
import { Header } from './components/Header.tsx'
import { Footer } from './components/footer.tsx'
import { AppContext } from './context/AppContext.tsx'
import { Widget } from './components/widget/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContext>
      {/* <TracingBeam className='overflow-x-hidden'> */}
      <Header/>
      <Router />
      <Footer />
      {/* </TracingBeam> */}
      <div className='relative z-10'>
        <Widget.Panel />
        <Widget.Button />
      </div>
    </AppContext>
  </StrictMode>,
)
