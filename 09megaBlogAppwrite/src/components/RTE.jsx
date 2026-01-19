import React from 'react'
import {Editor } from '@tinymce/tinymce-react'; //rich text editor ke liye ye package use kar rahe h
import {Controller } from 'react-hook-form'; //rich text editor ko react hook form ke sath use krne ke liye ye chahiye


export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {/* show label if provided from parent component */}
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller //eska use ham esliye kr rhe h kyuki ye react hook form ko kisi bhi third party component ke sath integrate krne me help krta h
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor //from tinymce ka editor component 
        apiKey='57v4e75nzgk2ttkxp2u45qlx7oczcgi2f6hedbyo8a2j5nh4'
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange} //ye onChange function ko call karega jab bhi editor ka content change hoga
        />
    )}
    />

     </div>
  )
}