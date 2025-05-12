import React from "react";
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/CheckoutForm";
import Scanner from "../../components/Scanner";

const Payment = () => {
    const stripePromise = loadStripe("pk_test_51QPeZEHm1WyUJKoCtnvYKk24z7aoL2tGZtjxgwbqal3ZOx05iIzTuzRIXBuk6Mv3ydDXdvUOa0ntnqc8FNVJwhv800srLqUZZW")

    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm/>
            </Elements>
            <Scanner/>
        </div>
    )
}

export default Payment