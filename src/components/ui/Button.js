import { ForwardedRef, forwardRef } from "react";
import { cn } from "../../../lib/utils";

const Button = forwardRef(({ className, children, disabled, type = 'button' }, ref) => {
    return (
        <button ref={ref} className={cn(`w-auto rounded-full bg-black border-transparent 
        px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold 
        hover:opacity-75 transition`, className)}
        >
            {children}
        </button>
    );
})

export default Button;