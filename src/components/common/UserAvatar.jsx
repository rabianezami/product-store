import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

export default function UserAvatar() {
  return (
    <Avatar className="h-8 w-8 ">
        <AvatarFallback className="bg-black text-white">
            <User className="w-4 h-4"/>
        </AvatarFallback>
    </Avatar>
  );
}