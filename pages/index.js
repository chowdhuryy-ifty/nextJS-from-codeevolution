import styles from '../styles/Home.module.css'
import Link from "next/link";
import {useRouter} from "next/router";

export default function Home() {
    const router = useRouter()
    const handleClick =() => {
        console.log('Placing your order')
        router.replace(`/product`)
    }
    return (
        <div className={styles.container}>
            <h1>Home Page</h1>
            <Link href="/about">
                <>about</>
            </Link>
            <br/>
            <Link href="/product">
                <>Product</>
            </Link>
            <br/>
            <button onClick={handleClick}>
                Place Order
            </button>
        </div>
    )
}
