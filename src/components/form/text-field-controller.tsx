import { FormControl, FormHelperText, TextField } from '@mui/material';
import { JSX } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export interface ControllerProps {
  name: string;
  label?: string;
  disabled?: boolean;
  skeletonOnLoading?: boolean;
  loading?: boolean;
  onChange?: (value: object) => void;
  placeholder?: string;
  className?: string;
}

export interface TextFieldControllerProps extends ControllerProps {
  type?: string;
  startAdornment?: JSX.Element;
  endAdornment?: JSX.Element;
  multiline?: boolean;
}

export interface ErrorObject {
  message: string;
}

const TextFieldController = (props: TextFieldControllerProps) => {
  const { control } = useFormContext();

  function getObjectValueFromPath(obj: unknown, path: string): ErrorObject {
    return path.split('.').reduce((acc, part) => acc && (acc as Record<string, unknown>)[part], obj) as ErrorObject;
  }

  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field, formState: { errors } }) => {
        const error = getObjectValueFromPath(errors, props.name);

        return (
          <FormControl fullWidth>
            <TextField
              id={props.name}
              value={field.value}
              error={!!error}
              onChange={field.onChange}
              disabled={props.disabled}
              multiline={props.multiline}
              {...props}
            />
            <FormHelperText error>{error?.message as React.ReactNode}</FormHelperText>
          </FormControl>
        );
      }}
    />
  );
};

export default TextFieldController;
