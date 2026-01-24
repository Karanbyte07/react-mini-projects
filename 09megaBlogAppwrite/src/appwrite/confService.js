import config from '../config/config.js';
import { Client, Databases, Storage, ID, Query } from 'appwrite';


export class Service {
    client = new Client();
    database;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.database = new Databases(this.client); //initialize database service
        this.bucket = new Storage(this.client);//create storage service
    }

    //method to create post 
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.database.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug, //using slug as document ID
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        }
        catch (error) {
            console.log("appwrite service :: createPost :: error :: ", error);
        }
    }

    //method to update post
    async updatePost(slug, { title, content, featuredImage, status, userId }) { //slug firstly we need to identify the document
        try {
            return await this.database.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug, //document ID
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        }
        catch (error) {
            console.log("appwrite service :: updatePost :: error :: ", error);
        }
    }

    //method to delete post
    async deletePost(slug) {
        try {
            await this.database.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug //document ID
            )
            return true;
        }
        catch (error) {
            console.log("appwrite service :: deletePost :: error :: ", error);
            return false;
        }
    }

    //method to get one post by slug
    async getPost(slug) {
        try{
            return await this.database.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        }
        catch (error){
            console.log("appwrite service :: getPost :: error :: ", error);
        }
    }

    //method to get all post with query that is the post which has status active
    async getPosts(queries = [Query.equal('status', 'active')]){
       
        try {
            return await this.database.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
             
        } catch (error) {
            console.log("appwrite service :: getPosts :: error :: ", error);
            return false;
        }

    }



    //File upload services
    //method to upload file to Appwrite storage bucket
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(), //unique file ID
                file 
            )
        } catch (error) {
            console.log("appwrite service :: uploadFile :: error :: ", error);
            return false;
        }
    }

    //delete file from Appwrite storage bucket
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("appwrite service :: deleteFile :: error :: ", error);
            return false;
        }
    }

    //get file preview
    getFilePreview(fileId){
        if (!fileId) {
            return null; // missing id, let caller decide how to render
        }
        return this.bucket.getFileView(
            config.appwriteBucketId,
            fileId
        );
    }

}


const service = new Service(); //new object of Service class
export default service; //export the object of Service class