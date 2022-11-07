import { component$, useStylesScoped$, useClientEffect$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { FirebaseError } from 'firebase/app';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAmZmuckTBZuUwetU3xROn0DBmdFjGZpvE",
  authDomain: "ttstvsschool.firebaseapp.com",
  projectId: "ttstvsschool",
  storageBucket: "ttstvsschool.appspot.com",
  messagingSenderId: "557949322894",
  appId: "1:557949322894:web:564892b7f3b3600ff7abdf",
  measurementId: "G-H56FQJJJ16"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const auth = getAuth(app);
export function signin(){
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential!.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
   
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
   console.log(user)
  } else {
    console.log('no')
  }
});



export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="bg-black bg-opacity-90 py-[14px] relative px-4 flex flex-row items-center content-center">
      <div class="flex flex-col space-x-[2px] ">
      
      </div>
      <div class=" md:flex hidden flex-row space-x-3 left-0 right-0 ml-auto items-center content-center ">
      <a  class="text-neutral-300 font-mono font-medium text-xs font-plex">HOME</a>
      <span class="text-neutral-700 font-plex text-lg">|</span>
      <a class="text-neutral-300 font-mono font-medium text-xs font-plex">EVENTS</a>
      <span class="text-neutral-700 font-plex text-lg">|</span>
      
      <a class="text-neutral-300 font-mono font-medium text-xs font-plex">REGISTERATIONS</a>
      <span class="text-neutral-700 font-plex text-lg">|</span>

      <a class="text-neutral-300 font-mono font-medium text-xs font-plex">CONTACT US</a>
      <span class="text-neutral-700 font-plex text-lg">|</span>    
      </div>
      {0!=0? <img class="w-8 h-8 rounded-full ml-3 bg-white  "  src={(0==0)?(''):''}></img>    : <button onClick$={()=>signin()} class="py-[7px] md:py-[7px] px-[14px] ml-auto md:ml-3 text-black bg-white bg-opacity-90 font-bold font-plex text-[12px] md:text-[11.5px]  " style="clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 25%, 90% 0);">Sign In</button>}

      
    </header>
  );
});
