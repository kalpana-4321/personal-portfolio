import {ownload} from "lucide-react";

export const AnimatedBorderButton=()=>{
    return(
        <button className="relative bg-transparent border border-border
            text-foreground hover:border-primary/50 transition-all
             duration-1000 focus:outline-none focus-visible:ring-2
            focus-visible:ring-primary focus-visible:ring-offset-2
             disable:opacity-50 disable:cursor-not-allowed group
            px-8 py-4 text-lg font-medium rounded-full overflow-visible
            animated-border
        ">

           {/* < Animated SVG Border/> */}
           <SVG className="absolute left-0 w-full h-full pointer-even">
             ViewBox="0 0 200 60"
             PreserveAspectRatio="none"
             style={{overflow:"visible"}}

             <path
             d="M 30,1 A 29,29 0 0 0 1, 30 L 1, 30 A 29, 29 0 0 0 30 59 L"
             fill="none" 
             stroke="var(--color-primary)"
             strokewidth="2"
             strokedasharray="400 550"
             strokedashoffset="400"
             strokelinecap="round"
             strokelinejoin="round"
             className="animated-border-path"
             />
            </SVG>
            <span className="relativez-10 flex items-center justify-center gap-2">
            <Download className="w-5 h-5"/>
             Download cv
            </span>
        </button>
    )

}