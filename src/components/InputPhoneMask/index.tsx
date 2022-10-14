import { forwardRef, ForwardRefRenderFunction } from 'react'
import { TextField, TextFieldProps } from '@mui/material'
import { Control, Controller } from 'react-hook-form'
import { PhoneMask } from './PhoneMask'

export type InputProps = {
  name: string
  label: string
  message?: string
  disabled?: boolean
  control: Control
} & TextFieldProps

const InputMaskBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, message, disabled = false, control, ...rest },
  ref
) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: {
          value: true,
          message: 'Informe o número do telefone'
        },
        pattern: {
          value: /^(\([0-9]{2}\) |[0-9]{3}-)[0-9]{5}-[0-9]{4}$/,
          message: 'Número do telefone inválido'
        }
      }}
      render={({ field }) => (
        <TextField
          onChange={field.onChange}
          value={field.value}
          onBlur={field.onBlur}
          label={label}
          placeholder={label}
          error={!!message}
          helperText={message}
          disabled={disabled}
          size="small"
          fullWidth
          sx={{ bgcolor: disabled ? '#f9f9f9' : undefined }}
          ref={ref}
          {...rest}
          InputProps={{
            inputComponent: PhoneMask as any
          }}
        />
      )}
    />
  )
}

export const InputPhoneMask = forwardRef(InputMaskBase)
