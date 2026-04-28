import { Heart } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { cn } from "@/lib/utils";

export default function HeartBtn({ active, variant = "default", onClick }) {
  return (
    <Button
      onClick={onClick}
      size="icon"
      className={cn(
        variant === "card" && "text-white bg-background/60  backdrop-blur-sm text-foreground  hover:bg-background/80 shadow-sm",
        variant === "navbar" && "text-foreground hover:bg-accent"
      )}
    >
      <Heart className={active ? "fill-red-500 text-red-500" : ""} />
    </Button>
  );
}