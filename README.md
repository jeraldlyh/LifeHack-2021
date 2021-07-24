# EduHome

> By **geekignore**
> - [Felice](https://github.com/felicepng/)
> - [Yvonne](https://github.com/yvonnelhs/)
> - [Nicholas](http://github.com/oversparkling/)
> - [Jerald](http://github.com/jeraldlyh/)

| Platform             | Description                                                                                            |
:--------------------- | :----------------------------------------------------------------------------------------------------: |
| Youtube              | [App Demo](https://youtu.be/ZCD_KD0oD_8)                                                               |
| Figma                | [Wireframes](https://www.figma.com/file/1B6Z7bEfnyFWEpj6xO2wkx/LifeHack-2021-geekignore?node-id=0%3A1) |

Code submission for [NUS LifeHack 2021](https://lifehack.nuscomputing.com/)

## Problem Statement
**"As technology rapidly infiltrates the education sector and changes not just the way people learn, but also how people teach, what refreshing ideas do you have to make learning and/or teaching more safe, exciting and effective?"**
> Having experienced what it is like to have school virtually due to the effects of pandemic, we are certain that EduHome will be able to curb these effects by enhancing the educational growth of our users.

## Target Audience
- Students

## Core Features
***Courses***
> Courses which are either outsourced from other companies or formulated by school teachers will be broken down into small bites of videos to ease the learning curve of abstract concepts.

***Forum***
> Enhance virtual learning by providing a platform for users to seek help for school related matters. Within individual forums, "open" study sessions are offered to target the issue of isolation in a virtual learning environment.

***Competition***
> Students are able to put their new knowledge to test by battling it out with other users to compete on the leaderboards.

## Future Plans
- Outsourcing of courses to education companies as well as teachers to better streamline the content and provide better quantity and quality of resources for our users
- Integration of social features such as chats to allow users to connect with like-minded individuals on the platform
- Implementation of third party API logins such as Google, Twitter or Github to ease user experience

## **Technology Stack**
- [React Native](https://reactnative.dev/)
- [Firestore](https://firebase.google.com/docs/firestore)
- [TailwindCSS](https://tailwindcss.com/)

## Local Deployment
### Expo
Refer to official [Expo documentation](https://docs.expo.io/get-started/installation/)
```bash
$ npm install --global expo-cli
```
Download Expo App:
- [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
- [IOS](https://itunes.com/apps/exponent)

### Firestore
Refer to official [Firestore documentation](https://firebase.google.com/docs/firestore/quickstart)

![image](https://user-images.githubusercontent.com/37609749/122356081-0b2c8880-cf85-11eb-97bd-5dac71a1b36f.png)
- Navigate to `.env.local` and copy the above config into the file
- Subsequently, rename `.env.local` to `.env`

### Cloning of Repo
```base
$ git clone https://github.com/jeraldlyh/LifeHack-2021.git
$ cd LifeHack-2021
$ npm install
$ expo start
```
- Scan the QR code provided by Expo CLI using your Expo Go App on your phone

## Disclaimer
- We do not own or license any copyrights in the images used in the application. You may use the Services and the contents contained in the Services soley for your own individual non-commercial and informational purposes only.
