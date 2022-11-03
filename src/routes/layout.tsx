import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer class="hidden">
        <div class="bg-neutral-800 h-96 w-screen" style="footerclass"></div>
      </footer>
    </>
  );
});
