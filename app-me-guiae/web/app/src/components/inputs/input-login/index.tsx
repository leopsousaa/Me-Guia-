import React, { FormEvent } from 'react'

import { Container, Input, Label } from './styled'

interface IInputProps {
  label: string
  error?: boolean
  type?: string
  onChange: (e: FormEvent<HTMLInputElement>) => void
}

const InputLogin: React.FC<IInputProps> = ({
  label,
  error,
  type,
  onChange
}) => {
  return (
    <Container>
      <Input error={error} placeholder=" " onChange={onChange} type={type} />
      <Label error={error}> {label} </Label>
    </Container>
  )
}

export { InputLogin }
