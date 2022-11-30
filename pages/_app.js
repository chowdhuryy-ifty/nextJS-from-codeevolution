import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </>
    )
}

export default MyApp
