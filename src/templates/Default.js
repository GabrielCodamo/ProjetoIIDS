import HeaderHome from '../components/HeaderHome'
import Footer from '../components/Footer'


const Default = ({children}) => {
    return (
        <>
           <HeaderHome/>
             {children}
           <Footer/>
        </>
    )
}

export default Default
