import { useEffect, useState } from 'react'
import { CheckBoxProps } from '../types/types'

export function CheckBox({ tag, remove, add }: CheckBoxProps) {
  const [checked, setChecked] = useState<boolean>(false)

  const handleCheck = () => {
    setChecked(!checked)
  }

  useEffect(() => {
    console.log('checked changed')
    checked ? add(tag) : remove(tag)
  }, [checked])

  return (
    <>
      <label className='tag'>
        <input type='checkbox' checked={checked} onChange={handleCheck} />
        <span>{tag}</span>
      </label>
    </>
  )
}
