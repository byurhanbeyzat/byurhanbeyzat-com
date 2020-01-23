import React from 'react'
import { FastField, ErrorMessage, useField } from 'formik'

import { Input, Error } from './styles'

export const InputField = ({ type = 'text', label, id, ...props }) => {
  const { name } = props
  const [field] = useField(name)

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Input id={id} type={type} as={FastField} {...field} {...props} />
      <ErrorMessage component={Error} name={id} />
    </>
  )
}
