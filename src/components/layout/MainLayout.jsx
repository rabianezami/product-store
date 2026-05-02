import { Outlet } from "react-router-dom";
import Container from "../common/Container";

export default function MainLayout() {
    return (
        <main className="py-8">
            <Container>
                <Outlet />
            </Container>
        </main>
    )
}