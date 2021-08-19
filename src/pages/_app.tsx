import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import AppContext, { AppProvider } from '../data/context/AppContext';


function MyApp({ Component, pageProps }) {
  return(
  <AppProvider>
     <Component {...pageProps} />
  </AppProvider>
  )
}

export default MyApp
export const AppConsume = AppContext.Consumer
