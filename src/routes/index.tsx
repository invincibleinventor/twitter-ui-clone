import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { initializeApp } from 'firebase/app';


export default component$(() => {

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
  return (
    <> 
   
    <div style="
 width: 100%;
    height: calc(100vh - 60px);
    position: relative;
    background-color: #000;
    background-size: 60px 80px;
    background-image: linear-gradient(90deg,hsla(0,0%,100%,.1) 1px,transparent 0),linear-gradient(180deg,hsla(0,0%,100%,.1) 1px,transparent 0);
    max-height: 900px;
    min-height: 653px;
    overflow: hidden;
    " class=" pt-8 ">
       <div class="fade-in-border"  style="border: 12px solid #e8e8e8;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all .5s ease;"></div>
    <div class="relative w-screen ">
      <div class="fade-in-text">
  <h1 style="z-index:1;" class="  left-0 right-0 text-[45px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-plex font-bold opacity-80 mt-[2px] text-center text-neutral-700">Swarn<span style="text-underline-offset: 15px;" class="text-neutral-700 underline">otsav</span></h1>
  <h1 style="z-index:0;position: absolute;right:2px; bottom: -9px;
   left: 1%; " class="  left-0 right-0 mb-3  text-[45px] sm:text-[60px] md:text-[80px] mr-2 lg:text-[100px] font-plex font-bold  text-center text-[#e8e8e8]">Swarn<span style="text-underline-offset: 15px; text-decoration-color: #e8e8e8;" class="text-[#e8e8e8] underline">otsav</span></h1>
</div>  <div class="fade-in-other absolute left-0 right-0 mx-auto   md:mt-8 flex items-center content-center " style="  background-position: center;
background-repeat: no-repeat; background-image: url('banner.svg');"> <img class=" hiddenmain mx-auto fade-in-main  rounded-full w-[240px] h-[240px] " src="https://i.picsum.photos/id/43/300/300.jpg?hmac=Sm3OKu2moFYAaBOpd9SmwpJSwp54NijrGe-PZXNMBmc"></img></div>
</div>


  <div style="width: 100vw;
    position: absolute;
    bottom: 0px;
    right: 0px;
    display: flex;
    align-items: end;
    justify-content: end;
    flex-direction: column;">
<img class="slide-in" src="hero-biggest 1.svg" style="opacity: 1; transform: none;"></img>

    </div>
    <button class="fade-in-slideup registeranim py-[10px] mt-[350px] md:mt-[340px] mx-auto absolute  md:py-[10px] px-[24px] right-0 left-0 w-max  text-black bg-[#e8e8e8] font-bold font-plex text-[16px]  mx-auto md:text-[18.5px] " style="clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 25%, 90% 0);">Register Now</button>

 </div>
ok
 </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
