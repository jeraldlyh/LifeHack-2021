import firebase from "../firebaseDB";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";


export const getProfile = (username) => {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection("User")
            .doc(username)
            .get()
            .then(doc => resolve(_.merge(doc.data(), { name: doc.id })))
            .catch(error => console.log("Error in getProfile"))
    });
};