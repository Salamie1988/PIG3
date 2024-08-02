import React from 'react'

const ButtonHeader = ({onClick,children}) => {
  return (
    <div>
        <button className='btn-header' onClick={onClick}>{children}</button>
    </div>
  )
}

export default ButtonHeader