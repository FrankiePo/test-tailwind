import cn from 'classnames';

const typeClass = {
    filled: 'bg-purple hover:bg-[#623AD2] active:bg-[#4C2CA6] rounded-md text-white',
    elevated: 'bg-purple hover:bg-[#623AD2] active:bg-[#4C2CA6] rounded-full text-white',
    outlined: 'bg-white text-purple rounded-md border border-purple hover:bg-[rgba(0,0,0,0.05)] active:bg-[rgba(0,0,0,0.1)]',
    tonal: 'bg-[#E9E1FF] text-[#7949FF] hover:bg-[#D7C8FF] active:bg-[#C8B4FF] rounded-md',
    ghost: 'rounded-md hover:bg-[rgba(0,0,0,0.05)] active:bg-[rgba(0,0,0,0.1)]',
    critical: 'bg-red text-white hover:bg-[#C33434] active:bg-[#952727] rounded-md',
}

const sizeClass = {
    s: "p-3 text-[12px]",
    m: 'p-[14px] text-[14px]',
    l: 'p-4 text-[16px]',
}

const Button = ({children, type, disabled, size = 'm', icon, iconRight}) => {
    return <button className={cn("inline-flex gap-1", typeClass[type], sizeClass[size], {
        'opacity-30 pointer-events-none': disabled,
    })}>{!iconRight ? icon : null}{children}{iconRight? icon : null}</button>
}

export default Button;