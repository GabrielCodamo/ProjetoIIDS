import HeaderRegister from '../components/HeaderHome'
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
