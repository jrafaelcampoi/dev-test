export default function Title(props) {

    const t1 = props.title1; 
    const t2 = props.title2; 

    return (
        <div className=" max-md:text-2xl text-5xl font-bold pl-[10vw]">
            <h1 className=" text-white">{t1}</h1><h1 className="text-primary-gold">{t2}</h1>
        </div>
    )
}