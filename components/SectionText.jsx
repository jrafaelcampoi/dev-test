export default function SectionText() {
    return (
        <>
            <section className=" max-md:flex-col w-full h-[450px] max-md:h-[650px] text-white text-[40px] max-xl:text-[28px] items-center font-bold flex justify-evenly uppercase">
                <article className="flex flex-col">
                    <h1>Qualidade <br /><b className=" text-primary-gold">em todos os detalhes</b></h1>
                    <h1 className="mt-12">Pós venda<br /><b className=" text-primary-gold">ativo</b></h1>
                </article>
                <article className="flex flex-col">
                    <h1>Compra segura<br /><b className=" text-primary-gold">em todo o processo</b></h1>
                    <h1 className="mt-12">Qualidade <br /><b className=" text-primary-gold">em todos os detalhes</b></h1>
                </article>
            </section>
        </>
    )
}