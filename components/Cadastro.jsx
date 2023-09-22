export default function Cadastro() {
    return (
        <div className=" flex text-center">
            <section className=" text-white flex max-md:flex-col max-md:pt-[80px] items-center justify-center max-md:justify-center bg-primary-gold font-bold select-none uppercase w-full min-h-[320px]">
                <h1 className=" max-md:text-2xl text-center text-4xl">Cadastre-se e<br /> receba novidades</h1>
                <form action="" className=" gap-6 flex flex-col m-12 w-[25%] max-md:w-[60%]">
                    <input required type="text" name="Nome" placeholder="Nome" id="name_lead" className="text-start bg-transparent border-b-2 h-9 pb-[15px] opacity-80 hover:opacity-100 outline-none placeholder-white font-light text-white text-lg"/>                                        
                    <input required type="email" name="Email" placeholder="Email" id="email-lead" className="text-start bg-transparent border-b-2 h-9 pb-[15px] opacity-80 hover:opacity-100 outline-none placeholder-white font-light text-white text-lg" />
                    <div className=" max-md:pb-[60px] flex justify-around">
                        <div></div><button className=" hover:text-black hover:durantion-1000 w-6 uppercase cursor-pointer duration-500 tracking-widest rounded-3xl pt-2 pb-2 pl-7 pr-7" type="submit">Enviar</button>
                    </div>
                </form>
                
            </section>
        </div>
    )
}