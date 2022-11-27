import { component$ } from '@builder.io/qwik';
import { QwikCity, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';
import './global.css';


// Initialize Firebase
export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  return (


    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
      </head>
      
      <body class="bg-white bg-cover" lang="en">
        <div class="h-[100%] w-[100%] bg-black bg-opacity-0">
        <RouterOutlet />


        <ServiceWorkerRegister />
        </div>
      </body>
      
    </QwikCity>

  );
});
