import { Account, Avatars, Client, Databases, Query } from 'react-native-appwrite';
import { ID } from 'react-native-appwrite';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


export const config = {                   
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: "com.js.pilcha",
    projectId: '6644c506001f4e245b6c',
    databaseId: '6644c66c0022b9415fa2',
    userCollectionId: '6644c68b000c04ccfa50',
    productCollectionId: '6644c6b6002f45a38bd1',
    storageId: '6644c8d000229f3c11fc',
}

const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)
    ;
const account = new Account(client);
const avatar = new Avatars(client);
const databases = new Databases(client);
export const createUser = async (email: string, password: string, nombre: string) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            nombre
        );
        if (!newAccount) throw new Error;
        const avatarUrl = avatar.getInitials(nombre);

       

        const newUser = await databases.createDocument(config.databaseId, config.userCollectionId, ID.unique(), {	
            accountId: newAccount.$id,
            email,
            nombre,
            avatar: avatarUrl
        });   return newUser;
    } catch (error) {
        console.error(error);
        throw new Error('Error creating user');
    }
}

export const signIn = async (email: string, password: string) => {
    
    try {
        
       
        
                const session = await account.createEmailPasswordSession(email,password);

        return session
    } catch (error) {
        console.error('este es el error' + error);
        throw new Error('Error signing in');
    }
}

export const getCurrentUser = async () => {
    try{
        const currentAccount = await account.get();
       
        
        if(!currentAccount) throw new Error;

        const currentUser = await databases.listDocuments(config.databaseId, config.userCollectionId, [Query.equal('accountId', currentAccount.$id)])

    if(!currentUser) throw new Error;
    return currentUser.documents[0];

    }catch(error){ 
        console.log('este es el error' + error);
        
        console.error(error);
        throw new Error;
    }
}