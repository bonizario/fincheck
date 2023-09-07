import { useForm } from 'react-hook-form';

type FieldValues = {
  email: string;
  password: string;
};

export function useLoginController() {
  const { handleSubmit: hookFormHandleSubmit, register } = useForm<FieldValues>();

  const handleSubmit = hookFormHandleSubmit(data => {
    console.log({ data });
  });

  return { handleSubmit, register };
}
