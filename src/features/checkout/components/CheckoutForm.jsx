import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { checkoutSchema } from "../validation/checkoutSchema"
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "@/features/cart/cartSlice"
import InputField from "@/components/common/form/InputField"
import { useEffect } from "react"
import {updateField } from "../checkoutSlice"


export default function CheckoutForm({ setLoading}) {
    const dispatch = useDispatch()

    const savedInfo = useSelector((state) => state.checkout.shippingInfo)

     const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm({
        resolver: yupResolver(checkoutSchema),
        mode: "onTouched",
        defaultValues: savedInfo
    })

    const formValues = watch()

    useEffect(() => {
     Object.keys(formValues).forEach((key) => {
      if (formValues[key] !== savedInfo[key]) {
        dispatch(updateField({ field: key, value: formValues[key] }));
       }
     });
    }, [formValues, dispatch, savedInfo]);
    

    const onSubmit = async (data) => {
        setLoading(true)

        await new Promise(r => setTimeout(r, 1000))

        console.log("Form Data:", data)
        toast.success("Order placed successfully")

        dispatch(clearCart())
        reset()
        setLoading(false)
    }

   
    return (
        <form id="checkout-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4 p-6 bg-card border ">
                <h2 className="text-xl font-bold text-foreground">
                   Shipping Details
                </h2>
                
               <div className="grid grid-cols-2 gap-4">
                <InputField 
                  label="First Name"
                  id="firstName"
                  {...register("firstName")}
                  error={errors.firstName?.message}
                />

                <InputField 
                  label="Last Name"
                  id="lastName"
                  {...register("lastName")}
                  error={errors.lastName?.message}
                />
               </div>

               <InputField 
                label="Address"
                id="address"
                {...register("address")}
                error={errors.address?.message}
               />

               <InputField
                label="Phone"
                id="phone"
                {...register("phone")}
                error={errors.phone?.message}
               />
            </div>
        </form>
    )
}