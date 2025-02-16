import { useFormContext } from "react-hook-form"
import { Quantity } from "./nested2";
export function Name({index}) {

    const {register,  formState: { errors }} = useFormContext();
    return <>
  <span>{errors.items?.[index]?.name && 
   errors.items[index].name.message}
  </span>
  <div class="mb-3">
  <input type="text"  {...register(`items.${index}.name`)} class="form-control" id="exampleFormControlInput1" placeholder="name" />
</div>
<Quantity index={index} />
  </>

  
}