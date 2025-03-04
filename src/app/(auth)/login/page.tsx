'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextFieldController from '@/components/form/text-field-controller';
import { Alert, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useEffect, useState } from 'react';
import './login.css';

type FormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
      localStorage.setItem('token', token);
      router.push('/');
    } else {
      setErrorMessage('Invalid email or password');
    }
  });

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  return (
    <>
      {errorMessage && (
        <Alert severity="error" className="error-alert-login">
          {errorMessage}
        </Alert>
      )}
      <Grid className="grid-container-login" container>
        <FormProvider {...form}>
          <Typography className="title-login">Login</Typography>

          <TextFieldController name="email" label="Email" type="email" />

          <TextFieldController name="password" label="Password" type="password" />
          <Button variant="text" className="submit-button-login " onClick={onSubmit}>
            Login
          </Button>
        </FormProvider>
      </Grid>
    </>
  );
}
