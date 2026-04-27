import { Heart } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { cn } from "@/lib/utils";

export default function HeartBtn({ active, variant = "default", onClick }) {
  return (
    <Button
      onClick={onClick}
      size="icon"
      className={cn(
        variant === "card" && "text-white bg-black/60 hover:bg-black/80",
        variant === "navbar" && "text-black"
      )}
    >
      <Heart className={active ? "fill-red-500 text-red-500" : ""} />
    </Button>
  );
}