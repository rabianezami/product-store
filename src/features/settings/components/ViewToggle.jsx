import { Button } from "@/components/ui/button";
import { useSettings } from "../context/SettingsContext";
import { Grid3X3, List } from "lucide-react";

export default function ViewToggle() {
    const { state, dispatch } = useSettings()

    return (
        <div className="flex gap-2">
            <Button
              size="icon"
              variant={state.view === "grid" ? "default" : "outline"}
              onClick={() => dispatch({ type: "SET_VIEW", payload: "grid"})}
            >
                <Grid3X3 />
            </Button>

            <Button 
              size="icon"
              variant={state.view === "list" ? "default" : "outline"}
              onClick={() => dispatch({ type: "SET_VIEW", payload: "list"})}
            >
                <List />
            </Button>
        </div>
    )
}