import { component$ } from "@builder.io/qwik";

export default component$(()=>{
    return(
        <div class="w-[700px] ml-7 bg-black lg:flex hidden flex-col h-screen p-4">
            <div class="w-full relative">
            <svg viewBox="0 0 24 24" aria-hidden="true" class=" absolute ml-2 w-5 h-5 text-neutral-600 r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
            <input class="w-full bg-neutral-300"></input>
            </div>
        </div>
    )
})