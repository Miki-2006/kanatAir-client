import { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [isProcessing, setIsProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState('')


    useEffect(() => {
      fetch('https://vercel.com/mirlans-projects/kanat-air-server/payment', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({amount: 1000, currency: "usd"})
      }).then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.error("Ошибка при получении сlientSecret:", error));
    }, [])


    const handleProcessingCard = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        const { error, paymentIntent } = await stripe.confirmCardPayment(
          clientSecret, // Получите clientSecret от вашего API
          {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          }
        );
    
        if (error) {
          console.error(error.message);
        } else if (paymentIntent) {
          console.log("Payment Successful:", paymentIntent);
        }
    
        setIsProcessing(false);
      };
    return (
        <form onSubmit={handleProcessingCard}>
            <CardElement
              options={{
                style: {
                    base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                            color: "#aab7c4",
                        },
                    },
                    invalid: {
                        color: "#9e2146",
                    },
                },
                hidePostalCode: true, // Отключает поле ввода почтового индекса
            }}
            />
            <button type="submit" disabled={!stripe || isProcessing}>
                {isProcessing ? "processing..." : "pay"}
            </button>
        </form>
    )
}

export default CheckoutForm