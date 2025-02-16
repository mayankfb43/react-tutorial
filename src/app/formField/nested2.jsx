import { useFormContext } from "react-hook-form"

export function Quantity({index}) {

    const {register,  formState: { errors }} = useFormContext();
    return <>
   <input
            {...register(`items.${index}.quantity`)}
            placeholder="Quantity"
            className="border p-2 w-full rounded mt-1"
            type="number"
          />
          <span>{errors.items?.[index]?.quantity && 
           errors.items[index].quantity.message}
          </span>

  </>

  
}