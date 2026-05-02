import { Button } from "@/components/ui/button";

export default function FormSwich({ text, actionText, onClick }) {
    return (
       <p className="text-center text-sm text-muted-foreground"> 
         {text}
         <button
           type="button"
           onClick={onClick}
           className="ml-1 underline underline-offset-4 hover: text-primary"
         >
            {actionText}
         </button>
       </p>
    )
}