import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
 <div class="w-screen relative mt-5">
  <h1 class="z-100 absolute left-0 right-0 text-[100px] font-plex font-bold opacity-80 mt-1 text-center text-neutral-600">Swarn<span style="text-underline-offset: 15px;" class="text-neutral-600 underline">otsav</span></h1>
  <h1 class="z-10 absolute left-0 right-0 mb-3 mr-2 text-[100px] font-plex font-bold  text-center text-white">Swarn<span style="text-underline-offset: 15px; text-decoration-color: white;" class="text-white underline">otsav</span></h1>

 </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
