import firebase from "../firebaseDB"
import _ from "lodash"

export const getRandomQuizFromCourseByDifficulty = (course, difficulty) => {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection("Course")
            .doc(course)
            .get()
            .then(doc => {
                const quizzes = _.filter(doc.data().quizzes, function (o) {
                    return o.difficulty === difficulty
                })
                resolve(_.sample(quizzes))
            })
            .catch(error => console.log("Error in getRandomQuiz", error))
    });
};

export const updateAnswer = (docID, answer, isHost) => {
    if (isHost) {
        firebase.firestore().collection("Competition")
            .doc(docID)
            .update({
                "host.isCorrect": answer,
                "host.submitted": true,
            })
    } else {
        firebase.firestore().collection("Competition")
            .doc(docID)
            .update({
                "player.isCorrect": answer,
                "player.submitted": true,
            });
    };
};

export const createCompetition = async (course, user, amount, difficulty) => {
    const quiz = await getRandomQuizFromCourseByDifficulty(course, difficulty);

    return new Promise((resolve, reject) => {
        firebase.firestore().collection("Competition")
            .add({
                host: {
                    name: user.name,
                    avatar: user.avatar,
                    entered: false,
                    isCorrect: false,
                    submitted: false,
                },
                player: {
                    name: "",
                    avatar: "",
                    entered: false,
                    isCorrect: false,
                    submitted: false,
                },
                quiz: quiz,
                valid: true,
                started: false,
                amount: amount,
                course: course,
            })
            .then(doc => resolve({ id: doc.id, quiz: quiz }))
            .catch(error => console.log(error))
    })
};

export const isAbleToJoin = (user, docID) => {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection("Competition")
            .doc(docID)
            .get()
            .then(doc => {
                const data = doc.data();
                if (data.host.name === user) {          // Host
                    resolve(true);
                } else if (!data.player.entered) {      // Another player has yet to join
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
    });
};

export const checkCompetitionAvailability = (docID, username, currency) => {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection("Competition")
            .doc(docID)
            .get()
            .then(doc => {
                const competition = doc.data();
                if (currency < competition.amount) {            // Insufficient currency to participate
                    resolve(false);
                } else if (username !== competition.host.name) {
                    if (competition.host.entered) {             // If host is already waiting for players
                        resolve(true);
                    } else if (competition.player.entered) {    // If there's another player waiting, but host is not around
                        resolve(false);
                    };
                } else {                // Permit host to join
                    resolve(true);
                }
            });
    });
};

export const invalidateRoom = (docID) => {
    firebase.firestore().collection("Competition")
        .doc(docID)
        .update({
            valid: false
        });
};


export const joinCompetition = (docID, user, isHost) => {
    return new Promise((resolve, reject) => {
        isAbleToJoin(user.name, docID).then(able => {
            if (able) {
                if (isHost) {
                    firebase.firestore().collection("Competition")
                        .doc(docID)
                        .update({
                            "host.name": user.name,
                            "host.avatar": user.avatar,
                            "host.entered": true,
                        })
                        .then(() => resolve(true))
                        .catch(error => console.log("Error in joinCompetition", error))
                } else {
                    firebase.firestore().collection("Competition")
                        .doc(docID)
                        .update({
                            "player.name": user.name,
                            "player.avatar": user.avatar,
                            "player.entered": true,
                        })
                        .then(() => resolve(true))
                        .catch(error => console.log("Error in joinCompetition", error))
                }
            };
        });
    });
};

export const leaveCompetition = (docID, isHost) => {
    return new Promise((resolve, reject) => {
        if (isHost) {
            firebase.firestore().collection("Competition")
                .doc(docID)
                .update({
                    "host.entered": false,
                })
                .then(() => resolve(true))
                .catch(error => console.log("Error in leaveCompetition", error))
        } else {
            firebase.firestore().collection("Competition")
                .doc(docID)
                .update({
                    "player.name": "",
                    "player.avatar": "",
                    "player.entered": false,
                })
                .then(() => resolve(true))
                .catch(error => console.log("Error in leaveCompetition", error))
        }
    });
};

export const startCompetition = (docId) => {
    firebase.firestore().collection("Competition")
        .doc(docID)
        .update({
            started: true
        });
};