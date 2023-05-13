

const Picture = ({ classPicture, classImage, mobile, desktop, breakPoint, alt }) => {
    return (
        <picture className={classPicture}>
            <source media={`(min-width: ${breakPoint})`} srcSet={desktop} />
            <img className={classImage} src={mobile} alt={alt} />
        </picture>
    )
}
  
export { Picture }