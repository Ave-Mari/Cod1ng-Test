import * as React from 'react'
type Prop = {
    title: string
}

export const Form: React.FC<Prop> = ({title}) => {
  return (
    <div>{title}</div>
  )
}
