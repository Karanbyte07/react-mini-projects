import React from 'react'

function button({
    children,
    type = 'button',
    bgColor = 'bg-blue-500',
    textColor = 'text-white',
    className = '',
    ...props 
}) 

{
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}  {...props}>
        {children}
    </button> //in dollar sign - jo user change krega colour wagera toh wo yha apply ho jyga like text color bg color wagera nhi toh default wala apply ho jyga
    //props - jo bhi extra properties values pass krega user wo yha aa jyga
    
  )
}

export default button