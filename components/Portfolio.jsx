export default function Portfolio() {

    return (
        <div className=" flex text-center">
            <section className=" text-white items-center pt-[120px] justify-center font-bold select-none uppercase w-full min-h-[370px] h-[20wh] mt-16 bg-[url('../assets/portfolio-banner.png')] bg-no-repeat bg-cover">
                <h1 className=" max-lg:text-3xl text-5xl">Conheça nossas <span className=" text-primary-gold">obras entregues</span></h1>
                <br /><br />
                <a className=" mt-[200px] rounded-3xl hover:bg-primary-gold-clicked duration-700 tracking-widest pl-7 pr-7 pt-2 pb-2 bg-primary-gold" href="#">Ver Portfólio</a>
            </section>
        </div>
    )

}