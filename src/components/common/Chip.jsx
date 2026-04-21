
import { Button } from "../ui/button";

export default function Chip({ active, children , onClick }) {
    return (
        <Button
           onClick={onClick}
           variant={active ? "default" : "secondary"}
           className="rounded-full px-3 py-1.5 text-sm"
        >
            {children}
        </Button>
    )
}