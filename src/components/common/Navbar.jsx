
import Container from "./Container"
import Logo from "./Logo"
import UserAvatar from "./UserAvatar"
import HeartBtn from "../../features/favorites/components/HeartBtn"
import { Link } from "react-router-dom"
import ThemeToggle from "@/features/settings/components/ThemeToggle"
import CartBtn from "@/features/cart/components/CartBtn"

export default function Navbar({ onOpenCart }) {
   
    return (
        <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
            <Container>
                <div className="flex items-center justify-between py-4">
                    <Logo />

                    <div className="flex flex-row gap-2">
                        <CartBtn  onClick={onOpenCart}/>

                        <Link to="/favorites">
                          <HeartBtn />
                        </Link>

                        <ThemeToggle />
        
                        <UserAvatar />
                    </div>
                </div>
            </Container>
        </header>
    )
}