import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import environment from 'environment';

const settings = { ...environment.firebase };

export const FireApp = initializeApp(settings);
export const FireAuth = FireApp.auth();
export const FireStore = FireApp.firestore();