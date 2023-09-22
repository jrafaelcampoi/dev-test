import Member from "./Member";

export default function Team(props) {

    const name = props.nome;

    return (
        <>
            <section className=" max-md:flex-wrap max-md:mt-[40px] justify-center flex bg-primary-gold">
                <Member name="Robson" />
                <Member name="Gilberto" />
                <Member name="Junior" />
            </section>
        </>
    )
}