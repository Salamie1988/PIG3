import React from 'react'

const ButtonSearch = ({onClick,children}) => {
  return (
    <div><button className='btn-search' onClick={onClick}>{children}</button></div>
  )
}

export default ButtonSearch