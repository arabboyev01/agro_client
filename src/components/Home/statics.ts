import * as I from "@/assets/images"
import CarouseImage from "../../assets/carouseImage.png"
import { TFunction } from "i18next"

export const HomeData = (t: TFunction<"translation", undefined>) => {
    return [
        {
            id: 0,
            name: t('home.magazin'),
            Icon: I.HomeIcon1,
            route: "/seeds",
        },
        {
            id: 1,
            name: t('home.magazin1'),
            Icon: I.HomeIcon2,
            route: "/seeds",
        },
        {
            id: 2,
            name: t('home.magazin2'),
            Icon: I.HomeIcon3,
            route: "/seeds",
        },
    ]
}

export const carouselData: string[] = [
    CarouseImage.src,
    CarouseImage.src,
    CarouseImage.src,
    CarouseImage.src
]