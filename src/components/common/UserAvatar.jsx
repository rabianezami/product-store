import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

export default function UserAvatar() {
  return (
    <Avatar className="h-8 w-8 cursor-pointer">
        <AvatarFallback className="bg-slate-950 text-white dark:bg-white dark:text-black border border-border/10">
            <User className="w-4 h-4"/>
        </AvatarFallback>
    </Avatar>
  );
}