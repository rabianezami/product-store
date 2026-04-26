import { useSelector } from "react-redux"
import { selectCartItems } from "../cartSelectors"
import CartItem from "./CartItem"

export default function CartList() {
    const items = useSelector(selectCartItems)

    if (items.length === 0) {
      return (
        <div className="grid place-items-center py-14 text-center px-5">
            <div className="text-base font-bold">Your basket is empty</div>
            <div className="text-sm text-muted-foreground mt-2">
                Add products to see theme here
            </div>
        </div>
      )
    }

    return (
      <div>
        {items.map((p) => (
           <CartItem key={p.id} item={p}/>
        ))}
      </div>
    )
} 