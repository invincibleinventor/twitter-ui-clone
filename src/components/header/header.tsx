import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

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
      <button class="py-[7px] md:py-[7px] px-[14px] ml-3 text-black bg-white bg-opacity-90 font-bold font-plex text-[12px] md:text-[11.5px]  " style="clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 25%, 90% 0);">Sign In</button>

      
    </header>
  );
});
