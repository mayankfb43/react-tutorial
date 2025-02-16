import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function DynamicForm() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      items: [{ name: "", quantity: "" }],
    },
    resolver: yupResolver(
      yup.object().shape({
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
                if (items[index]?.quantity < items[index - 1]?.quantity) {
                  return false;
                }
                return true;
              }),
          })
        ),
      })
    ),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const onSubmit = (data) => console.log("Form Data:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded w-96">
      <h2 className="text-lg font-bold mb-2">Dynamic Form</h2>

      {fields.map((field, index) => (
        <div key={field.id} className="mb-4 p-2 border rounded">
          <label className="block font-semibold">Item {index + 1}</label>

          {/* Name Input */}
          <input
            {...register(`items.${index}.name`)}
            placeholder="Item name"
            className="border p-2 w-full rounded mt-1"
          />
          {errors.items?.[index]?.name && (
            <p className="text-red-500 text-sm">{errors.items[index].name.message}</p>
          )}

          {/* Quantity Input */}
          <input
            {...register(`items.${index}.quantity`)}
            placeholder="Quantity"
            className="border p-2 w-full rounded mt-1"
            type="number"
          />
          {errors.items?.[index]?.quantity && (
            <p className="text-red-500 text-sm">{errors.items[index].quantity.message}</p>
          )}

          {/* Priority Select */}
          <select
            {...register(`items.${index}.priority`)}
            className="border p-2 w-full rounded mt-1"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          {errors.items?.[index]?.priority && (
            <p className="text-red-500 text-sm">{errors.items[index].priority.message}</p>
          )}

          {/* Remove Button */}
          <button
            type="button"
            onClick={() => remove(index)}
            className="bg-red-500 text-white px-2 py-1 rounded mt-2 w-full"
            disabled={fields.length === 1}
          >
            Remove
          </button>
        </div>
      ))}

      {/* Add New Item Button */}
      <button
        type="button"
        onClick={() => append({ name: "", quantity: "" })}
        className="bg-blue-500 text-white p-2 rounded mb-2 w-full"
      >
        Add Input
      </button>

      {/* Submit Button */}
      <button type="submit" className="bg-green-500 text-white p-2 rounded w-full">
        Submit
      </button>

      {/* Watch Values (For Debugging) */}
      <pre className="mt-4 bg-gray-100 p-2">{JSON.stringify(watch("items"), null, 2)}</pre>
    </form>
  );
}

export default DynamicForm;
