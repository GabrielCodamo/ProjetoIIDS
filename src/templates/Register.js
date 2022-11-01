import HeaderRegister from '../components/HeaderRegister'
import Footer from '../components/Footer'

const Default = ({children}) => {
    return (   
        <>
           <HeaderRegister />
             {children}
           <Footer/>
            
           </>
    )
}

export default Default
