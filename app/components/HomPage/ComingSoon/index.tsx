'use client'

import ComingSoonItem from "./ComingSoonItem"
//import SwiperContainer from "../../SwiperContainer"

export default function ComingSoon() {
    
    const arr = [1,2,3,4,5,6,7,8,9,10];

    return (
        <div className="flex flex-row gap-10 overflow-x-scroll w-full">
            {arr.map((item, index) => <ComingSoonItem key={index} />)}
        </div>
    )
}