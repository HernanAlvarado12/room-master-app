

const Item = ({ text, color, size }) => {
    const colorVariants = {
        black: 'text-black font-bold lowercase ts:text-white'
    }

    const sizeVariants = {
        sm: 'text-sm ts:text-md'
    }

    const variants = `${colorVariants[color]} ${sizeVariants[size]}`

    return (
        <li className={`relative cursor-pointer group ${variants}`}>
            {text}
            <span className="w-full h-0.2 absolute bottom-0 left-0 scale-x-0 transition-all duration-500 bg-white group-hover:scale-x-75 group-hover:duration-500"></span>
        </li>
    )
}

export { Item }