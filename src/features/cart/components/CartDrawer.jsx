import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../cartSelectors";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import CartHeader from "./CartHeader";
import CartList from "./CartList";
import CartFooter from "./CartFooter";

export default function CartDrawer({ open, onClose }) {
  const total = useSelector(selectCartTotal)
  const items = useSelector(selectCartItems)

  return (
    <Sheet open={open} onOpenChange={onClose}>
        <SheetContent side="right">
            {/*  Header */}
            <CartHeader />

            {/* Body */}
            <div className="flex-1 overflow-auto p-4">
              <CartList />
            </div>
            
            {/* Footer */}
           <CartFooter items={items} total={total}/>
        </SheetContent>
    </Sheet>
  )
}