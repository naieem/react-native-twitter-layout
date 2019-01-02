import React, {
    Component
} from 'react';
import {
    View,
    Text
} from 'react-native';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDjtVishNAmMqCl2HdfghOUkebRwaqjBME",
    authDomain: "ecommerce-8726b.firebaseapp.com",
    databaseURL: "https://ecommerce-8726b.firebaseio.com",
    projectId: "ecommerce-8726b",
    storageBucket: "ecommerce-8726b.appspot.com",
    messagingSenderId: "387167767867"
};
firebase.initializeApp(config);
const Firebase = firebase;
const Auth = firebase.auth();
const DB = firebase.database();

export {
    Auth,
    DB,
    Firebase
};