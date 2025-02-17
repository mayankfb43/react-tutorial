import React from "react";
import { useForm, useFieldArray, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Name } from "./formField/nested1";
import {Quantity} from "../../src/app/formField/nested2"
import { Select } from "./formField/select";
import { v4 as uuidv4 } from "uuid"; // Import UUID generator


function DynamicForm() {
  const methods = useForm({
    defaultValues: {
      items: [],
      extraField: "", // Adding extra field

    },
    resolver: yupResolver(
      yup.object().shape({
        extraField: yup
      .string()
      .required("This field is required")
      .max(20, "Maximum length is 20 characters"), // Added max length validation
        items: yup.array().of(
          yup.object().shape({
            name: yup
              .string()
              .required("Name is required")
              .min(3, "At least 3 characters"),
            quantity: yup
              .string()
              .test("validate-quantity", "Quantity is required when name exists", function (value) {
                const index = this.path.match(/\d+/)[0]; // Extract index from path
                const items = watch("items") || []; // Now watch is initialized
                if (items[index]?.name) {
                  return value !== undefined && value !== null && value !== "";
                }
                return true;
              }).test("low-quantity", "Quantity is too low for a high priority item", function (value) {
                const index = this.path.match(/\d+/)[0]; // Extract index from path
                const items = watch("items") || []; // Now watch is initialized
                if (items[index]?.priority === 'High') {
                  if(value < 10) {
                    return false;
                  }
                }
                return true;
              }).test("low-quantity-previous", "Quantity is lower than previous row", function (value) {
                const index = this.path.match(/\d+/)[0]; // Extract index from path
                const items = watch("items") || []; // Now watch is initialized

       
                
                if (parseInt(items[index]?.quantity) < parseInt(items[index - 1]?.quantity)) {
                  return false;
                }
                return true;
              }),
          })
        ),
      })
    ),
  });

  const {
    register,
    control,
    handleSubmit,
    watch,
    trigger,
    setValue, 
    formState: { errors },
  } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const onSubmit = (data) => console.log("Form Data:", data);

  return (
    <FormProvider {...methods}>

    <form  onSubmit={handleSubmit(onSubmit)} className="p-3 border rounded row">
      <h2 className="text-lg font-bold mb-2">Dynamic Form</h2>
      <div className="mb-4">
        <label className="block font-semibold">Extra Field</label>
        <input
          {...register("extraField")}
          placeholder="Enter extra data"
          className="border p-2 w-full rounded mt-1"
        />
        <span className="text-red-500">{errors.extraField?.message}</span>
      </div>

      {fields.map((field, index) => (
        <div key={field.id} className="mb-4 p-2 border rounded">

          <div className="col-12">
            <div className="row">
              <div className="col-4">
              <Name index={index} />

              </div>
              <div className="col-4">
                <Quantity index={index} />
              </div>
              <div className="col-4">
                <Select index={index} />
              </div>
            </div>
          </div>
          
          <button disabled={fields.length === 1} onClick={() => remove(index)} type="button" class="btn btn-danger">Remove</button>

       
        </div>
      ))}

      {/* Add New Item Button */}
      <button  onClick={() => append({ id: uuidv4(), name: "", quantity: "", priority: "low"})}  type="submit" class="btn btn-success">Add Input</button>
     
   

      {/* Submit Button */}
      <button  type="submit" class="btn btn-success">Submit</button>
     


      {/* Watch Values (For Debugging) */}
      <pre className="mt-4 bg-gray-100 p-2">{JSON.stringify(watch(), null, 2)}</pre>
    </form>
    </FormProvider>
  );
}

export  {DynamicForm};
