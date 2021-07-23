import firebase from "../firebaseDB"
import _ from "lodash"

export const isCourseExist = (data) => {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection("Course")
            .where("name", "==", data.name)
            .get()
            .then(querySnapshot => {
                const dataArray = []
                querySnapshot.forEach(doc => dataArray.push(doc.data()))

                if (dataArray.length !== 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(error => {
                resolve(false)
                console.log("Error in isCourseExist");
            });
    });
};

export const insertCourse = (data) => {
    isCourseExist(data)
        .then(exist => {
            if (!exist) {
                console.log("Inserting", data.name)
                firebase.firestore().collection("Course")
                    .doc(data.name)
                    .set({
                        name: data.name,
                        quizzes: data.quizzes
                    })
            }
        });
};