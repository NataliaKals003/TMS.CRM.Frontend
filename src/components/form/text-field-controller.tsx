import { ErrorObject, TextFieldControllerProps } from '@/types/form';
import { FormControl, FormHelperText, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

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
