import HeaderHome from '../components/HeaderHome'
import Footer from '../components/Footer'


const Default = ({children}) => {
    return (
        <>
         <div style={{ 
            backgroundColor: "rgb(242, 244, 245)",
            
           }}>
           <HeaderHome/>
             {children}
           <Footer/>
        </div>
           
        </>
    )
}

export default Default
