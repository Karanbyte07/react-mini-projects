import config from '../config/config.js';
import { Client, Account } from 'appwrite';

//create class AuthService for easier management of authentication
export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl) // Your Appwrite Endpoint
            .setProject(config.appwriteProjectId); // Your project ID
        this.account = new Account(this.client);
    }

    //method to create a new user account
    async createAccount(email, password, name) {
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if(userAccount){
                //if user account is created successfully, log the user in
                return await this.login(email, password);
            }
            else {
                throw new Error('Account creation failed');
            }
        }
        catch (error){
            throw error;
        }
    }

    //method to create a login 
    async login(email, password) {
        try {
            return await this.account.createSession(email, password);
        }
        catch (error) {
            throw error;
        }
    }

    //method to get the currently logged-in user
    async getCurrentUser() {
        try {
            return await this.account.get();
        }
        catch (error) {
            console.log("appwrite service :: getCurrentUser :: error :: ", error);
        }

        return null;
    }

    //method to log out the current user
    async logout() {
        try {
            return await this.account.deleteSessions();
        }
        catch (error) {
            throw error;
        }
    }
} 

const authService = new AuthService(); //create an instance(object) of AuthService




export default authService; //export the instance(object) of AuthService