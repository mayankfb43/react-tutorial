import * as yup from "yup";

export const getDynamicFormSchema = (watch) =>
  yup.object().shape({
    items: yup.array().of(
      yup.object().shape({
        name: yup
          .string()
          .required("Name is required")
          .min(3, "At least 3 characters"),
        quantity: yup
          .string()
          .test(
            "validate-quantity",
            "Quantity is required when name exists",
            function (value) {
              const index = this.path.match(/\d+/)[0]; // Extract index from path
              const items = watch("items") || []; // Now watch is properly used
              return items[index]?.name ? !!value : true;
            }
          ),
      })
    ),
  });
