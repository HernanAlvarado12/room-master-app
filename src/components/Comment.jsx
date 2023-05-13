

const Comment = ({ classList, title, sizeTitle, classTitle = '', text, sizeText, classText = '' }) => {
    const titleSize = {
        md: 'text-md uppercase tracking-widest',
        lg: 'text-lg leading-none'
    }

    const textSize = {
        sm: 'text-sm',
        md: 'text-md',
    }

    return (
        <article className={classList}>
            <h2 className={`text-black font-bold ${titleSize[sizeTitle]} ${classTitle}`}>{title}</h2>
            <p className={`text-gray font-normal ${textSize[sizeText]} ${classText}`}>{text}</p>
        </article>
    )
}


export { Comment }