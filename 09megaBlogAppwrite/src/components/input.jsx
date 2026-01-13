import React from 'react'
import { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '', //yeh blank hi rkhte hain mostly jab tak user kuch na kare
    ...props

}, ref) {
    const id = useId(); //unique id generate krne k liye react ka hook useId jo har input k liye alag id generate krta hai esliye use kr rhy hain taki label or input ka connection bna rahe
    return (
        <div className='w-full'>
            {
                label && <label className='inline-block mb-1 pl-1'
                    htmlFor={id}> {/* label yahan se input ko target kr rha hai */}
                    {label}
                </label>
            }
            <input
                type={type}
                className={` px-3 py-2 rounded-lg bg-white text-black outline-none 
                    focus:bg-gray-50 duration-200 border border-gray-200 w-full
                    ${className} `}
                    ref={ref}
                    {...props}
                    id = {id} //input yahan same id le rha hai jo label se mila hai
            />

        </div>
    )
})

export default Input