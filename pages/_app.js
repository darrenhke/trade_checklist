import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css';

function MyApp({ Component, pageProps }) {
  const [session, setSession] = useState()

  return (<AppContext.Provider value={{ session, setSession }}><Component {...pageProps} /></AppContext.Provider>)
}

export default MyApp
