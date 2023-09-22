

export default function MenuItem(props) {
    let route;

    switch(props.menu) {
        case 'Empreendimentos':
            route = "/empreendimentos"; break;
        case 'Sobre nós':
            route = "/quemsomos"; break;
        case 'Oportunidades':
            route = "#"; break;
        case 'Portfólio':
            route = "#"; break;
        case 'Fale Conosco':
            route = "#"; break;
    }
    
    return (
        <>
            <a href={route} className="text-white bg-transparent uppercase font-semibold tracking-wide text-[13px] pt-[35px] pb-[35px] pl-[20px] pr-[20px] border-opacity-0 cursor-pointer hover:border-t-8 hover:pt-[28px] hover:text-primary-gold hover:border-primary-gold hover:duration-500">{props.menu}</a>
        </>
    )
}