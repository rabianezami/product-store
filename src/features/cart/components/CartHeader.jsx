import { useSelector } from "react-redux";
import { selectCartCount, selectCartItems } from "../cartSelectors";

export default function CartHeader() {
  const items = useSelector(selectCartItems)
  const itemCount = useSelector(selectCartCount)
  
  return (
    <div className="border-b p-5">
        <div className="text-sm font-extrabold">Product Store Cart</div>
        <div className="text-xs text-muted-foreground">
            {items.length} types •  {itemCount} items
        </div>
    </div>
  )
}