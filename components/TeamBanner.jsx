import Image from "next/image"
import BannerTeam from '@/assets/team_banner.png'

export default function TeamBanner() {
    return (
        <>
            <section className="w-full h-auto flex justify-center">
                <Image id="banner4" src={BannerTeam} />
            </section>
        </>
    )
}