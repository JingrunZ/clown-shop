import { initializeApp } from "firebase/app";

import { 
    getAuth, 
    signOut,
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc, collection, query, getDocs } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAnoRexCuQzts-ltcnUH2aIaAXsxdpL05o",
  authDomain: "crown-clothing-e4e53.firebaseapp.com",
  projectId: "crown-clothing-e4e53",
  storageBucket: "crown-clothing-e4e53.appspot.com",
  messagingSenderId: "666580890616",
  appId: "1:666580890616:web:a503f051eab944573a9c0d"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth,provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const createAuthWithEmailAndPassword = async (email,password) => {
    const response = await createUserWithEmailAndPassword(auth,email,password)
    //console.log(response)
    return response
}

export const signInAuthUserwithEmailAndPassword = async (email,password) => {
    const response = await signInWithEmailAndPassword(auth,email,password)
    //console.log(response)
    return response
}

export const signOutAuthUser = async() =>{
    signOut(auth)
    console.log('logged out this user',auth)
}

//---------------------------------------------------------------

export const db = getFirestore();


export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db,'users',userAuth.user.uid)
    console.log(userDocRef)
    
    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    
    const createdAt = new Date()
    await setDoc(userDocRef,{
        displayName:userAuth.user.displayName,
        email:userAuth.user.email,
        createdAt:createdAt
    
    })
}

export const addCollectionAndDocuments = async(collectionName,objectsToAdd) =>{
    const categoriesRef = collection(db, collectionName);
    
    objectsToAdd.forEach(async category=>{
        const categoriesDocRef = doc(db,collectionName,category.title)
        await setDoc(categoriesDocRef, category)
    })
    console.log('finish')
}

export const getCategoriesAndDocuments = async() =>{
    const collectionRef = collection(db, 'categories');
    const q =query(collectionRef)

    
    const categoriesSnapShot = await getDocs(q)
    //console.log(categoriesSnapShot)
    const categoryMap = categoriesSnapShot.docs.reduce((acc,currentCategory)=>{
        acc[currentCategory.data().title] = (currentCategory.data().items)
        return acc
    },{})
    //console.log(categoryMap)
    return categoryMap
}