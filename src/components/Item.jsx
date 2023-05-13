

const Item = ({ text, color, size }) => {
    const colorVariants = {
        black: 'text-black font-bold lowercase'
    }

    const sizeVariants = {
        sm: 'text-sm'
    }

    const variants = `${colorVariants[color]} ${sizeVariants[size]}`

    return <li className={`cursor-pointer ${variants}`}>{text}</li>
}

export { Item }