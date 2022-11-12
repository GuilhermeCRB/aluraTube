import { useState } from 'react';

export default function useForm({ initialValues }) {
  const [values, setValues] = useState(initialValues);

  function handleChange(evento) {
    const value = evento.target.value;
    const name = evento.target.name;
    setValues({
      ...values,
      [name]: value,
    });
  }

  return {
    values,
    handleChange,
    clearForm: () => setValues({}),
  };
}
