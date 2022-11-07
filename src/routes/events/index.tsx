import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { url } from 'inspector';
import Radium from 'radium';

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

/* <div class="font-plex text-sm my-8" style="
    display: flex;
    gap: 0;
    height: 79px;
"><div style="background-color: #e8e8e8;
padding: 19.5px 20px;
color: #0e0e0e;
flex: 8;
display: flex;
flex-direction: column;
gap: 12px;
position: relative;
-webkit-clip-path: polygon(calc(100% - 24px) 0,100% 24px,100% 100%,0 100%,0 0);
clip-path: polygon(calc(100% - 24px) 0,100% 24px,100% 100%,0 100%,0 0);"><div style="
display: flex;
    align-items: center;
    height: 100%;
    gap: 9.37px;
    border-bottom: 1px solid;"
    ><img style="max-width: 100%;
    height: auto;

    display: block;
    vertical-align: middle;" src="svg/search-icon.svg" alt=""/><input style="background-color: #e8e8e8;
    width: 100%;
    height: 100%;

    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;" type="text"  class="outline-none" placeholder="Search..." value=""/></div></div></div>
    </div>
    */

const app = initializeApp(firebaseConfig);

export default component$(() => {
    return(<div class="px-32">
    <div class="md:py-10 py-5 ">
    <h1 class="md:text-7xl text-3xl font-neue font-light text-neutral-200">Events</h1>
   </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
     

     
      <div class="w-96 h-80 border border-[#e8e8e8]">

      </div>
      <div class="w-96 h-80 border border-[#e8e8e8]">

      </div>
    </div>
    </div>)
})
export const head: DocumentHead = {
    title: 'Swarnotsav',
  };