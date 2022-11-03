import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="bg-black bg-opacity-90 py-3 relative px-6 flex flex-row items-center content-center">
      <div class="flex flex-col space-x-[2px] ">
      
      </div>
      <div class=" md:flex hidden flex-row space-x-3 left-0 right-0 ml-auto items-center content-center ">
      <a  class="text-neutral-300 font-mono font-medium text-sm font-plex">Home</a>
      <span class="text-neutral-600 font-mono text-md">|</span>
      <a class="text-neutral-300 font-mono font-medium text-sm font-plex">Events</a>
      <span class="text-neutral-600 font-mono text-md">|</span>

      <a class="text-neutral-300 font-mono font-medium text-sm font-plex">Registrations</a>
      <span class="text-neutral-600 font-mono text-md">|</span>

      <a class="text-neutral-300 font-mono font-medium text-sm font-plex">Contact Us</a>
      <span class="text-neutral-600 font-mono text-md">|</span>

      <button class="py-[8px] px-4 ml-1 text-black bg-white font-bold font-plex text-xs" style="clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 25%, 90% 0);">Sign In</button>
      </div>
      
    </header>
  );
});
