import { NextUIProvider } from '@nextui-org/react'
import './App.css'
import { AppRouter } from './Router/AppRouter'
import { queryClient } from '../queryClient';
import { QueryClientProvider } from '@tanstack/react-query';

function App() {

  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </NextUIProvider>
  )
}

export default App