import { z } from "@/views/_shared_/custom-validate";
import { useCustomForm } from "@/views/_shared_/use-custom-form";

const schema = z.object({
  email: z.string.required(),
  password: z.string.optional(),
});

export const useLogin = () => {
  const { defineField, errors, handleSubmit } = useCustomForm(schema);
  const [email] = defineField("email");
  const [password] = defineField("password");

  const handleLogin = handleSubmit(form => {
    console.debug(form);
  });

  return {
    email,
    password,
    handleLogin,
    errors,
  };
};
