import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
 <div>
  <h1 class="text-[140px] font-plex font-bold text-white">Swarnotsav</h1>

 </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
