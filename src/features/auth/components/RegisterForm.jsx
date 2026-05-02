import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { registerSchema } from "../validations/registerSchema"
import InputField from "@/components/common/form/InputField"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import FormSwich from "./FormSwich"
import { useNavigate } from "react-router-dom"

export default function RegisterForm({ onSwitchToLogin }) {
 
  const navigate = useNavigate()

  const { register,handleSubmit,reset, formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onTouched",
  })

  const onSubmit = (data) => {
    console.log("REGISTER:", data)
    toast.success("Registered successfully")
    reset()
    navigate("/", {replace: true})
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

      <InputField
        label="Full Name"
        id="fullName"
        {...register("fullName")}
        error={errors.fullName?.message}
      />

      <InputField
        label="Email"
        id="email"
        type="email"
        {...register("email")}
        error={errors.email?.message}
      />

      <InputField
        label="Password"
        id="password"
        type="password"
        {...register("password")}
        error={errors.password?.message}
      />

      <InputField
        label="Confirm Password"
        id="confirmPassword"
        type="password"
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />

      <Button disabled={!isValid || isSubmitting} className="w-full">
        {isSubmitting ? "Creating..." : "Create Account"}
      </Button>

      <FormSwich
        text="Already have an account?"
        actionText="Login"
        onClick={onSwitchToLogin}
      />
    </form>
  )
}