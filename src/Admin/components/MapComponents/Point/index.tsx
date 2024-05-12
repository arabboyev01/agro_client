import { MyContentProps } from '@/Admin/types'
import LocationSVG from '@/assets/location.png'
import { FC } from 'react'


export const PointComponent: FC<MyContentProps> = ({ isSelected }) => (
    <div>
        {isSelected && <img src={LocationSVG.src} alt="Selected Icon" style={{ width: '30px', height: '30px' }} />}
    </div>
)