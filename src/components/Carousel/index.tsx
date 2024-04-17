import { FC, useState } from "react"
import DumbCarousel from "./DumbCarouse"

const Carousel: FC<{ data: string[] }> = ({ data }) => {
    const [index, setIndex] = useState(0)
    const [carousel, setCarousel] = useState(data[0])

    const increment = () => {
        if (index < data.length - 1) {
            setIndex(index + 1);
            setCarousel(data[index + 1]);
        }
    }

    const decrement = () => {
        if (index > 0) {
            setIndex(index - 1);
            setCarousel(data[index - 1]);
        }
    }
    
    return <DumbCarousel image={carousel} inCrement={increment} descrement={decrement}/>
}
export default Carousel