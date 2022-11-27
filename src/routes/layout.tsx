import { component$, Slot } from '@builder.io/qwik';
import Sidebar from '~/components/sidebar/sidebar';
import Header from '../components/header/header'

export default component$(() => {
  return (
    <>
      <main>
        <section class="h-screen md:w-[800px] sm:w-[600px] xs:w-screen lg:w-[1010px] xl:w-[1230px] my-auto mx-auto items-center content-center overflow-x-hidden flex flex-row">
<Header></Header>

          <Slot />
          <Sidebar/>
        </section>


      </main>
     
    </>
  );
});
