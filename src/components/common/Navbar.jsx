import { useState } from "react"
import Container from "./Container"
import Logo from "./Logo"
import UserAvatar from "./UserAvatar"
import HeartBtn from "../../features/favorites/components/HeartBtn"
import { Link, useNavigate } from "react-router-dom"
import ThemeToggle from "@/features/settings/components/ThemeToggle"
import CartBtn from "@/features/cart/components/CartBtn"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "@/features/auth/authSlice"
import ConfirmModal from "./modal/ConfirmModal"

export default function Navbar({ onOpenCart }) {
    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [openLogout, setOpenLogout] = useState(false)

    const handleLogout = () => {
        dispatch(logout())
        setOpenLogout(false)
        navigate("/")
    }

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
        
                        <UserAvatar  onClick={() => setOpenLogout(true)} />
                    </div>
                </div>
            </Container>

            <ConfirmModal 
              open={openLogout}
              title="Logout"
              description="Are you sure you want to logout?"
              onCancel={() => setOpenLogout(false)}
              onConfirm={handleLogout}
            />
        </header>
    )
}