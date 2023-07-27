# Bible-App
App that displays bible verses according to use input, or selected topic.

#Project Set Up

1. Open a terminal or command prompt and navigate to the front-end project directory.
Run the following command to install the project dependencies specified in the package.json file:
npm install

2. Create a .env file in the root directory of your front-end project. This file will store your environment variables.
Inside the .env file, add your API key(s) in the following format:
REACT_APP_API_KEY=your_api_key_here

4. Configure Firebase in Your React App:
- In your React app, you'll need to import and initialize Firebase with the configuration object obtained in step 4. Create a firebase.js file in your src folder and add the following code:

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  // Paste the configuration object obtained from Firebase here
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;


