'use client'

import { useFormStatus } from 'react-dom'

export default function PostButton() {
  const { pending } = useFormStatus()

  return (
    <button
      className={'bg-blue-600 py-2 px-4 rounded disabled:opacity-50'}
      disabled={pending}
      type={'submit'}
    >
      Submit
    </button>
  )
}
