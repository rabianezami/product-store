import { useState } from "react";
import AuthCard from "../components/AuthCard";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";


export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true)

    return (
      <AuthCard title={isLogin ? "Login" : "Register"}>
        {isLogin ? (
           <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
        ) : (
           <RegisterForm onSwitchToLogin={() => setIsLogin(true)}/>
        )} 
      </AuthCard>
    )
}