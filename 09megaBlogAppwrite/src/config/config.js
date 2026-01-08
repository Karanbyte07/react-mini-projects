//we create a config object to hold our Appwrite configuration values, which are read from environment variables using import.meta.env
const config = {
    appwriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APP_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APP_APPWRITE_BUCKET_ID),
}




export default config;