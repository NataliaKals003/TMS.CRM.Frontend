import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorObject, SelectControllerProps } from '@/types/form';

function getObjectValueFromPath(obj: unknown, path: string): ErrorObject {
  return path.split('.').reduce((acc, part) => acc && (acc as Record<string, unknown>)[part], obj) as ErrorObject;
}

const SelectController: React.FC<SelectControllerProps> = ({ name, label, disabled, forceShrink, onChange, options }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => {
        const error = getObjectValueFromPath(errors, name);
        const labelId = `${name}-label`;

        return (
          <FormControl fullWidth error={!!error}>
            <InputLabel id={labelId} disabled={disabled} shrink={forceShrink}>
              {label}
            </InputLabel>
            <Select
              id={name}
              label={label}
              labelId={labelId}
              value={field.value ?? ''}
              onChange={(event) => {
                field.onChange(event);
                onChange?.(event);
              }}
              IconComponent={KeyboardArrowDownIcon}
              disabled={disabled}
            >
              {options
                ?.sort((a, b) => a.label?.localeCompare(b.label) ?? 0)
                .map(({ value, label, customLabel, disabled }) => (
                  <MenuItem key={value} value={value} disabled={disabled}>
                    {customLabel || label}
                  </MenuItem>
                ))}
            </Select>
            <FormHelperText>{error?.message}</FormHelperText>
          </FormControl>
        );
      }}
    />
  );
};

export default SelectController;
