import { Comment } from "./Comment"
import { Picture } from "./Picture"
import data from "../helpers/data"
import arrow from "../assets/arrow.svg"
import chairs from "../assets/about-dark.jpg"

const Main = () => {
    return (
        <main className="mt-5 mb-10 md:grid md:items-center md:grid-cols-2 md:gap-y-4 ts:h-[40vh] ts:max-h-[40vh] ts:m-0 ts:gap-y-0">
            <section className="w-90 mx-auto md:col-span-2 ts:w-2/5 ts:pt-[5%] ts:px-[5%] ts:absolute ts:top-0 ts:right-0">
                <Comment classList="" title={data[0].title} sizeTitle="lg" classTitle="ts:text-[3rem] lg:text-lg" text={data[0].text} sizeText="md" classText="mt-2 mb-3.5 ts:mb-2" />
                <a className="flex items-center gap-x-2 text-md uppercase font-medium tracking-[1rem] hover:opacity-50" href ="">
                    <span className="">SHOP NOW</span>
                    <img src={arrow} alt="arrow right icon" />
                </a>
            </section>
            <Picture classPicture="w-full h-full mt-8 mb-6 block md:my-0 ts:max-h-[40vh]" classImage="w-full h-full ts:h-[40vh]" mobile={chairs} desktop={chairs} alt="chairs" breakPoint="950px" />
            <Comment classList="w-90 mx-auto" title={data[1].title} sizeTitle="md" text={data[1].text} sizeText="md" classText="mt-2" />
        </main>
    )
}


export { Main }