import React from 'react'
import { BarLoader, FadeLoader } from 'react-spinners'

const Loader = ({ loading, spinner='scale', color='0989FF' }) => {
  return (
    <div className='text-center'>
        {spinner === 'scale' && (
            <BarLoader 
                aria-label='loader'
                color={`#${color}`}
                loading={loading}
                height={8}
                width={100}
                margin={2}
            />
        )}
        {spinner === 'fade' && <FadeLoader loading={loading} color='0989FF' />}
    </div>
  )
}

export default Loader