import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "@/features/cart/cartSelectors";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function OrderSummary({ loading }) {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <Card className="sticky top-24">
      <CardHeader><CardTitle>Your Order</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span className="text-muted-foreground line-clamp-1">{item.title} x{item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span className="text-primary">${total.toFixed(2)}</span>
        </div>
        <Button 
           type="submit"
           form="checkout-form"
           disabled={loading || items.length === 0}
           className="w-full mt-4"
        >
           {loading ? "Processing..." : "Place Order"}
        </Button>
      </CardContent>
    </Card>
  );
}
