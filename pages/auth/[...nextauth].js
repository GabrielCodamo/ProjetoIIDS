import NextAuth from "next-auth"
import axios from 'axios'

export const authOptions = {
 
  providers: [
    CredentialsProvider({
        name:'Credentials',
        async authorize(credentials){
            const res =  axios.post('/api/auth/signin',{
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { 'Content-Type': 'application/json' }
        })

        const user = res.data

        if(user){
            return user
        }else {
            return null
        }
     }
    })
  ],

  session: {
    jwt: true,
    
  },  
}

export default NextAuth(authOptions)