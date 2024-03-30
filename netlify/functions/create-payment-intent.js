

require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

exports.handler = async(event) =>{
    try{
        console.log(process.env.STRIPE_SECRET_KEY)
        const { amount } = JSON.parse(event.body)

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency:"cad",
            payment_method_types:["card"]
        })
        return{
            statusCode:200,
            headers:{
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            },
            
            body:JSON.stringify({paymentIntent})
        }
    }catch(error){
        console.log(error)
        return{
            statusCode:400,
            body:JSON.stringify({error})
        }
    }
}