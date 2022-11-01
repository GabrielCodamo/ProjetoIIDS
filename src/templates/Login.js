import HeaderLogin from '../components/HeaderLogin'
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
