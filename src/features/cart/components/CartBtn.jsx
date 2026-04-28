
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { selectCartCount } from "../cartSelectors"


export default function CartBtn({ onClick }) {
  const count = useSelector(selectCartCount)

  const badge = useMemo(() => (count >  99 ? "99+" : String(count)), [count])

  return (
    <Button 
     onClick={onClick}
     size="icon"
     className="relative"
    >
      <ShoppingCart />

      {count > 0 && (
        <span className="absolute -top-1 -right-1 h-5 min-w-5 bg-red-600 items-center justify-center rounded-full px-1 text-[10px] font-bold text-white border-2 border-background ring-1 ring-red-600/20">
            {badge}
        </span>
      )}
    </Button>
  )
}
 