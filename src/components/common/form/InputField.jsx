import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputField({ 
    label,
    id,
    error,
    children,
    ...props
}) {
    return (
        <div className="space-y-2">
            <Label id={id}>{label}</Label>

            <div className="relative">
                <Input 
                  id={id}
                  {...props}
                  className={error ? "border-destructive" : ""}
                />

                {children && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        {children}
                    </div>
                )}
            </div>

            {error && (
                <p className="text-xs text-destructive">{error}</p>
            )}
        </div>
    )
}