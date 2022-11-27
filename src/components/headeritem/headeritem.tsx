import { component$, useStore } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

interface pros {
    url?: any,
    name: string,
    link?: string,
}



export default component$((props:pros)=>{
    const loc = useLocation()
    const a = useStore(
        {
        'opened': false
            
        }
    )

    if(loc.pathname==props.link){
        a.opened=true
    }

    return(
        <div class="flex flex-row rounded-full px-[14px] pr-8 w-max py-[10px] space-x-[16px] rounded-full transition-all ease-linear duration-100 cursor-pointer hover:bg-gray-200 items-center content-center">
  <img src={props.url}  class="w-8 p-[2px] h-8"></img>
    <span class={`text-black text-xl font-sans ${a.opened?'font-semibold':'font-normal'} pt-[0px]`}>{props.name}</span>
  </div>
    )
})