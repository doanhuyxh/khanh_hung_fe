'use client'

import Image from "next/image"

export default function HallOfFrame() {

    return (
        <div className="flex flex-col gap-10 p-5 rounded-2xl bg-white">
            <div className="flex flex-row justify-start gap-2 items-center">
                <span className="w-12 h-12">
                    <Image
                        src={"/assets/images/home/hall-of-fame-logo-quyet-tran.png"}
                        alt="100"
                        width={100}
                        height={100}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </span>
                <p className="font-[500]">Quyết Trần Academy</p>
            </div>
            <div className="h-auto w-full rounded-xl overflow-hidden">
                <Image
                    src={"/assets/images/home/hall-of-fame-item-quyet-tran.jpg"}
                    alt=""
                    width={100}
                    height={100}
                    style={{ width: '100%', height: 'auto' }}
                    className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
                />
            </div>
        </div>

    )
}