import HeaderLogin from '../components/HeaderHome'
import Footer from '../components/Footer'

const Default = ({children}) => {
    return (   
        <>
           <HeaderLogin />
             {children}
           <Footer/>
            
           </>
    )
}

export default Default
