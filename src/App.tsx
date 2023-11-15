import './App.css'

import CurrencyCard from './components/CurrencyCard'


import { CurrencyContextProvider } from './context/currenctyContext'

function App() {
  return (
    <CurrencyContextProvider>
      <div className="flex items-center justify-center">
        <CurrencyCard />
      </div>
    </CurrencyContextProvider>
  )
}

export default App
