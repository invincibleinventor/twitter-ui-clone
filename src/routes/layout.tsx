import { component$, Slot } from '@builder.io/qwik';
import Sidebar from '~/components/sidebar/sidebar';
import Header from '../components/header/header'

export default component$(() => {
  return (
    <>
      <main>
        <section class="h-screen md:w-[810px] sm:w-[650px] xs:w-screen lg:w-[1020px] xl:w-[1250px] my-auto mx-auto items-center content-center overflow-x-hidden flex flex-row">
<Header></Header>

          <Slot />
          <Sidebar/>
        </section>


      </main>
     
    </>
  );
});
