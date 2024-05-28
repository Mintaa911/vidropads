import axios from 'axios'


const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

export async function buyPackage(priceId){
    try {
       const result = await api.post("/checkouts/checkout-session",{priceId},{ maxRedirects: 5 })
       
       return result.data.url
    } catch (error) {
        console.log(error.message)
    }
}