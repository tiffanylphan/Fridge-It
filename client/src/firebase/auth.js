import {auth, googleProvider} from "./config";


export function loginWithGoogle() {

    return auth().signInWithRedirect(googleProvider);
    //return authenticate(loginWithFirebase(googleProvider));
}

export function logout() {
    return auth().signOut();
}

