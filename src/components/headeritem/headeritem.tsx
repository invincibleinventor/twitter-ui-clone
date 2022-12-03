import { component$, useStore } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

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
    const link = props.link?.replace('/','')

    return(
        <Link href={link} class="flex flex-row rounded-full px-[14px] pr-8 w-max py-[10px] mx-1 md:mx-0 space-x-[16px] rounded-full transition-all ease-linear duration-100 cursor-pointer hover:bg-gray-200 items-center content-center">
  <img src={props.url}  class="w-[30px] p-[2px] h-[30px]"></img>
    <span class={`text-black text-xl md:inline-block hidden font-sans ${a.opened?'font-semibold':'font-normal'} pt-[0px]`}>{props.name}</span>
  </Link>
    )
})