import { Comment } from "./Comment"
import { Picture } from "./Picture"
import data from "../helpers/data"
import arrow from "../assets/arrow.svg"
import chairs from "../assets/about-dark.jpg"

const Main = () => {
    return (
        <main className="mt-5 mb-10">
            <section className="w-90 mx-auto">
                <Comment classList="" title={data[0].title} sizeTitle="lg" text={data[0].text} sizeText="md" classText="mt-2 mb-3.5" />
                <a className="flex items-center gap-x-2 text-md uppercase font-medium tracking-[1rem] " href ="">
                    <span className="">SHOP NOW</span>
                    <img src={arrow} alt="arrow right icon" />
                </a>
            </section>
            <Picture classPicture="mt-8 mb-6 block"  mobile={chairs} desktop={chairs} alt="chairs" />
            <Comment classList="w-90 mx-auto" title={data[1].title} sizeTitle="md" text={data[1].text} sizeText="md" classText="mt-2" />
        </main>
    )
}


export { Main }