import * as I from "@/assets/images"
import CarouseImage from "../../assets/carouseImage.png"
import { TFunction } from "i18next"

export const HomeData = (t: TFunction<"translation", undefined>) => {
    return [
        {
            id: 2,
            name: t('magazin2'),
            Icon: I.HomeIcon3,
            route: "/varities",
        },
        {
            id: 0,
            name: t('magazin'),
            Icon: I.HomeIcon1,
            route: "/seeds",
        },
        {
            id: 1,
            name: t('magazin1'),
            Icon: I.HomeIcon2,
            route: "/consultant",
        },
        
    ]
}

export const carouselData: string[] = [
    CarouseImage.src,
    CarouseImage.src,
    CarouseImage.src,
    CarouseImage.src
]