
import CheckoutForm from "../components/CheckoutForm";
import Container from "@/components/common/Container";
import OrderSummary from "../components/OrderSummary";
import { useState } from "react";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false)

  return (
    <Container>
      <h1 className="text-3xl font-bold py-6">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10">
        <div className="lg:col-span-8">
          <CheckoutForm setLoading={setLoading} />
        </div>
        <div className="lg:col-span-4">
          <OrderSummary loading={loading}/>
        </div>
      </div>
    </Container>
  )
}