'use client'

interface buttonProps{
    placeholder:string;
    onClick:()=>void;
}

export default function WatchButton({placeholder , onClick}:buttonProps){
    
    return(
        <button onClick={onClick}>
            {placeholder}
        </button>
    )
}