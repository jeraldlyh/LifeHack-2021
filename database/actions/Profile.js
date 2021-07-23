import firebase from "../firebaseDB";
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

export const deductCurrency = (username, currentAmount, amount) => {
    const diff = currentAmount - amount;
    const updateAmount = diff >= 0 ? diff : 0;

    firebase.firestore().collection("User")
        .doc(username)
        .update({
            currency: updateAmount
        });
};

export const addCurrency = (username, amount) => {
    firebase.firestore().collection("User")
        .doc(username)
        .update({
            currency: firebase.firestore.FieldValue.increment(amount)
        });
};