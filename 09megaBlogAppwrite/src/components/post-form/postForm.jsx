import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index.js";
import service from "../../appwrite/confService.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function postForm(post) { //agar post h to edit karne ke liye hoga otherwise new post create karne ke liye hoga
    const { register, handleSubmit, control, watch, setValue, getValues } = useForm(
        {
            defaultValues: { //post ke andar jo data h wo aa jayega agar edit kar rahe h to
                title: post?.title || "",
                slug: post?.slug || "",
                content: post?.content || "",
                status: post?.status || "active",
            }
        }
    );

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData); //redux se user data le rahe h

    //if we have post then we will update otherwise create new post
    const submit = async (data) => {
        if (post) { //agar post h to update karna h
            const file = data.image[0] ? service.uploadFile(data.image[0]) : null;

            if (file) { //agar new file upload ki h to purani wali delete kr do
                service.deleteFile(post.featuredImage)
            }

            const dbPost = await service.updatePost(post.$id, { //save kr do update post to the database
                ...data,
                featuredImage: file ? file.$id : undefined,
            })


          {/* agar db post aa gya toh navigate kr do */}
            if (dbPost) {
                navigate(`/post/${dbPost.slug}`);
            }
        } else { //new post create karna h
            const file = data.image[0] ? await service.uploadFile(data.image[0]) : null;

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await service.createPost({
                    ...data,
                    userId: userData.$id,
                })
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    }

    //function to transform title to slug matlab jo title h usko slug me convert kr dega slug matlab jo url 
    const slugTransform = useCallback((value) => {
        if(value && typeof value === "string") {
            return value
            .trim() //remove spaces from start and end
            .toLowerCase()
            .replace(/^[a-zA-Z\d\s]+/g, '-') //replace special chars with hyphen
            .replace(/\s/g, '-') //replace spaces with hyphen
        }
        return ""
    }, [])

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if(name === "title") { //agar title change hota h to slug ko update kar do
                const slug = slugTransform(value.title);
                setValue("slug", slug, {shouldValidate: true});
            }
        })
        return () => subscription.unsubscribe();
    }, [watch, setValue, slugTransform]);

    return (
         <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
    
}

export default postForm


// 1. USER ACTIONS
//    - Types title → Auto-generates slug
//    - Types content in RTE
//    - Uploads image
//    - Selects status
//    - Clicks Submit

// 2. FORM COLLECTS DATA
//    {
//        title: "My Blog",
//        slug: "my-blog",
//        content: "<p>Rich HTML content...</p>",
//        status: "active",
//        image: [File object]
//    }

// 3. SUBMIT FUNCTION
//    - Uploads image to Appwrite
//    - Creates/Updates post in database
//    - Adds userId to new posts

// 4. REDIRECT
//    - Navigate to post page on success