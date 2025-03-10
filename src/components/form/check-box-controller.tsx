import { ErrorObject, CheckboxControllerProps } from '@/types/form';
import { FormControl, FormHelperText } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { Controller, useFormContext } from 'react-hook-form';

function getObjectValueFromPath(obj: unknown, path: string): ErrorObject {
  return path.split('.').reduce((acc, part) => acc && (acc as Record<string, unknown>)[part], obj) as ErrorObject;
}

const CheckboxController: React.FC<CheckboxControllerProps> = (props: CheckboxControllerProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field, formState: { errors } }) => {
        const error = getObjectValueFromPath(errors, props.name);

        return (
          <FormControl>
            <Checkbox
              sx={{
                color: ' #7e92a2',
                '&.Mui-checked': {
                  color: '#2dc8a8',
                },
              }}
              id={props.name}
              checked={!!field.value}
              onChange={(event) => {
                field.onChange(event.target.checked);
                props.onChange?.(event);
              }}
            />
            <FormHelperText error>{error?.message as React.ReactNode}</FormHelperText>
          </FormControl>
        );
      }}
    />
  );
};

export default CheckboxController;
