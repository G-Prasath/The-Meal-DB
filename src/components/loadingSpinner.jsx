import React from 'react'

const loadingSpinner = () => {
  return (
    <div className='flex items-center justify-center py-12'>
      <div className='animate-spin rounded-full border-t-2 border-emerald-600 h-12 w-12'></div>
    </div>
  )
}

export default loadingSpinner
