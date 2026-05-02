import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "../validations/loginSchema";
import { toast } from "sonner";
import InputField from "@/components/common/form/InputField";
import { Button } from "@/components/ui/button";
import FormSwich from "./FormSwich";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "@/features/auth/authSlice"

export default function LoginForm({ onSwitchToRegister }) {
    const [ showPassword, setShowPassword] = useState(false)

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    
    const from = location.state?.from || "/"

    const { register, handleSubmit, formState: { errors, isValid, isSubmitting }, } = useForm({
        resolver: yupResolver(loginSchema),
        mode: "onTouched", 
    })

    const onSubmit = (data) => {
       console.log("LOGIN:", data)
       dispatch(login({ email: data.email }))
       toast.success("Logged in successfully")
       navigate(from)
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <InputField 
          label="Email"
          id="email"
          type="email"
          {...register("email")}
          {...errors.email?.message}
        />

        <InputField 
          label="Password"
          id="password"
          type={showPassword ? "text" : "password"}
          {...register("password")}
          error={errors.password?.message}
       >
         <button 
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-sm"
         >
            👁
         </button>
        </InputField>

        <Button disabled={!isValid || isSubmitting} className="w-full">
         {isSubmitting ? "Logging in..." : "Login"}
        </Button>
       
       <FormSwich 
        text="Don't have an account?"
        actionText="Register"
        onClick={onSwitchToRegister}
       />
      </form>
    )
}