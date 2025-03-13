'use client';

import { useForm, FormProvider } from 'react-hook-form';
// import { useRouter } from 'next/navigation';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextFieldController from '@/components/form/text-field-controller';
import { Alert, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useEffect, useState } from 'react';
import './login.css';
import { useAuth } from '@/hooks/auth-provider';
import { useRouter } from 'next/navigation';

type FormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { signIn } = useAuth();
  const router = useRouter();

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

  const onSubmit = form.handleSubmit(async (formData: FormValues) => {
    const signInSuccessful = await signIn({
      email: formData.email,
      password: formData.password,
    });

    if (signInSuccessful) {
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
        <Alert
          sx={{
            position: 'absolute',
            width: '400px',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            zIndex: '1000',
          }}
          severity="error"
        >
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
