import React from 'react'

interface TextButtonProps {
  text: string
}

const TextButton: React.FC<TextButtonProps> = ({ text }) => {
  return (
    <button
      style={{
        background: 'none',
        border: 'none',
        color: '#514EF3',
        fontSize: '14px',
        fontWeight: 500,
        padding: 0,
        cursor: 'pointer',
      }}
    >
      {text}
    </button>
  )
}

export default TextButton
