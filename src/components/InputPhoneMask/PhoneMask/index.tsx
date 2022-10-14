import React from 'react'
import { IMaskInput } from 'react-imask'

type CustomProps = {
  onChange: (_event: { target: { name: string; value: string } }) => void
  name: string
}

export const PhoneMask = React.forwardRef<HTMLElement, CustomProps>(
  function PhoneMask(props, ref) {
    const { onChange, ...rest } = props
    return (
      <IMaskInput
        {...rest}
        mask="(#0) 00000-0000"
        definitions={{
          '#': /[1-9]/
        }}
        inputRef={ref as any}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    )
  }
)
