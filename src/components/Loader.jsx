import React, { memo } from 'react'

function Loader() {
  return (
    <div className='fixed-w-full h-screen flex-center'>
      <div className='w-24 h-24 border-pink-500 border-t-8 animate-spin rounded-full'/>
    </div>
  )
}
export default memo(Loader);