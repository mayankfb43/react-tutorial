import { useFormContext } from "react-hook-form"
export function Name({index}) {

    const {register,  formState: { errors }} = useFormContext();
    return <>
 
  <input {...register(`items.${index}.name`)}  class="form-control" type="text" placeholder="Default input" aria-label="default input example" />

  <span>{errors.items?.[index]?.name && 
   errors.items[index].name.message}
  </span>

  </>

  
}