import firebase from "../firebaseDB"
import _ from "lodash"

export const getRandomQuizFromCourseByDifficulty = (course, difficulty) => {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection("Course")
            .doc(course)
            .get()
            .then(doc => {
                const quizzes = _.filter(doc.data().quizzes, function(o) {
                    return o.difficulty === difficulty
                })
                resolve(_.sample(quizzes))
            })
            .catch(error => console.log("Error in getRandomQuiz", error))
    })
}

export const createCompetition = async (course, user, amount, difficulty) => {
    const quiz = await getRandomQuizFromCourseByDifficulty(course, difficulty);

    firebase.firestore().collection("Competition")
        .add({
            host: user,
            player: "",
            quiz: quiz,
            valid: true,
            started: false,
            amount: amount,
            course: course,
            hostSubmitted: false,
            playerSubmitted: false,
        })
        .catch(error => console.log(error))
};

export const isAbleToJoin = (user) => {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection("Competition")
            .where("valid", "==", "true")
            .where("playerOne", "==", user)
            .get()
            .then(querySnapshot => {
                if (querySnapshot.size !== 0) {
                    resolve(false)
                } else {
                    resolve(true)
                };
            });
    });
};

export const joinCompetition = (docID, user) => {
    return new Promise((resolve, reject) => {
        isAbleToJoin(user).then(able => {
            if (able) {
                firebase.firestore().collection("Competition")
                    .doc(docID)
                    .update({
                        player: user,
                        started: true
                    })
                    .then(() => {
                        resolve(true)
                    })
                    .catch(error => console.log("Error in joinCompetition"))
            };
        });
    });
};