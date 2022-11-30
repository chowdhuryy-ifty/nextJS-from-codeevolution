import Image from "next/image";

export default function SpiderPage() {
    return (
        <div>
            {['1', '2', '3', '4', '5', '6'].map((path) => {
                return (
                    <div key={path}>
                        <Image src={`/${path}.jpg`} alt='spider' width='380' height='520'/>
                    </div>
                )
            })}
        </div>
    )
}