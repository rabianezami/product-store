import { useDispatch } from "react-redux";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { decQty, incQty, removeFromCart } from "../cartSlice";

export default function CartItem({ item }) {
    const dispatch = useDispatch()

     if (!item) return null

    return ( 
        <Card className="p-4 m-2">
            <div className="flex gap-3">
                <div className="grid h-16 w-16 place-items-center rounded-lg bg-muted">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="h-12 w-12 object-contain"
                    />
                </div>

                <div className="flex-1">
                    <div className="flex justify-between">
                        <div className="text-sm font-bold line-clamp-2">
                            {item.title}
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                            Remove
                        </Button>
                    </div>

                    <div className="flex justify-between mt-2">
                        <div className="font-bold">
                            ${(item.price * item.qty).toFixed(2)}
                        </div>

                        <div className="flex items-center gap-2">
                            <Button 
                              size="icon"
                              variant="ghost"
                              onClick={() => dispatch(decQty(item.id))}
                            >
                                -
                            </Button>

                            <span className="min-w-6 text-center">{item.qty}</span>

                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => dispatch(incQty(item.id))}
                            >
                                +
                            </Button>

                        </div>
                    </div>

                </div>
            </div>
        </Card>
    )
}