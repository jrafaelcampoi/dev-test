import Title from '../components/Title'

export default function bgTitle(props) {

    const content = props.content;
    const content2 = content.split(" ", 2);

    const title1 = content2[0];
    const title2 = content2[1];

    let idbanner;
    if (props.banner == "1") {
        idbanner = "banner1";
    } else {
        idbanner = "banner2";
    } 

    return (
        <section id={idbanner} className=" flex items-center bg-no-repeat relative font-bold select-none text-white text-[calc(192px)] leading-none uppercase w-full h-[330px] bg-primary-gray pointer-events-none">
            <Title title1={title1} title2={title2} />
        </section>
    )
}