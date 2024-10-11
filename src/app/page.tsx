'use client';

import React from 'react'

import Button from '../components/Button'

const ExamplePage: React.FC = () => {
  const handleClick = (): void => {
    console.log('Button clicked!')
  }

  return (
    <div>
      <Button
        label="Click me!"
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      />
    </div>
  )
}

export default ExamplePage