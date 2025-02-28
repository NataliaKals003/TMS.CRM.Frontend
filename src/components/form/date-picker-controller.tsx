import { DatePickerControllerProps, ErrorObject } from '@/types/form';
import { FormControl, FormHelperText } from '@mui/material';
import { DatePicker, PickersActionBarAction } from '@mui/x-date-pickers';
import { Controller, useFormContext } from 'react-hook-form';

function getObjectValueFromPath(obj: unknown, path: string): ErrorObject {
  return path.split('.').reduce((acc, part) => acc && (acc as Record<string, unknown>)[part], obj) as ErrorObject;
}

const DatePickerController = (props: DatePickerControllerProps) => {
  const { control } = useFormContext();
  const defaultFormat = 'dd/MM/yyyy';

  return (
    <>
      <Controller
        name={props.name}
        control={control}
        render={({ field, formState: { errors } }) => {
          const error = getObjectValueFromPath(errors, props.name);

          let actions: PickersActionBarAction[] = ['accept'];
          if (props.clearable) {
            actions = ['clear', ...actions];
          }

          return (
            <FormControl fullWidth>
              <DatePicker
                label={props.label}
                value={field.value || null}
                minDate={props.minDate}
                maxDate={props.maxDate}
                onChange={(val) => field.onChange(val)}
                slotProps={{
                  actionBar: {
                    actions: actions,
                  },
                  field: { clearable: props.clearable },
                }}
                format={defaultFormat}
              />
              <FormHelperText error>{error?.message as React.ReactNode}</FormHelperText>
            </FormControl>
          );
        }}
      />
    </>
  );
};

export default DatePickerController;
