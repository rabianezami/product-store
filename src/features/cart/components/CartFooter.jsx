import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { clearCart } from "../cartSlice";
import { useNavigate } from "react-router-dom";

export default function CartFooter({ total, items }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className="border-t p-5">
            <div className=" flex justify-between">
                <span className="font-medium">Total</span>
                <span className="text-lg font-bold">
                    ${total.toFixed(2)}
                </span>
            </div>

            <div className="flex gap-2 mt-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  disabled={items.length === 0}
                  onClick={() => navigate("/")}
                >
                    Continue shopping
                </Button>

                <Button
                  className="flex-1"
                  disabled={items.length === 0}
                >
                    Checkout
                </Button>
            </div>

            <Button
                variant="outline"
                className="w-full mt-3 bg-red-300 border-red-200 text-red-900"
                disabled={items.length === 0}
                onClick={() => dispatch(clearCart())}
            >
                Clear
            </Button>
        </div>
    )
}