'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextFieldController from '../../components/form/text-field-controller';

type FormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const schema = yup.object().shape({
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: undefined,
      password: undefined,
    },
  });

  const onSubmit = form.handleSubmit((formData) => {
    if (formData.email === 'test@example.com' && formData.password === 'password') {
      const token = 'fake-jwt-token';
      localStorage.setItem('token', token); // Armazena token fake no localStorage
      router.push('/'); // Redireciona para home
    } else {
      setError('Invalid email or password');
    }
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <FormProvider {...form}>
        <h2 className="text-xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        {/* Campo de Email */}
        <div className="mb-4">
          <TextFieldController name="email" label="Email" type="email" />
        </div>

        {/* Campo de Senha */}
        <div className="mb-4">
          <TextFieldController name="password" label="Password" type="password" />
        </div>

        <button onClick={onSubmit} className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </FormProvider>
    </div>
  );
}
