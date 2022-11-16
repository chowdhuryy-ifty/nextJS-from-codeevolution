import styles from '../styles/Home.module.css'
import Link from "next/link";
import {useRouter} from "next/router";

export default function Home() {
    const router = useRouter()

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
            <Link href='/posts'>
                Posts
            </Link>

        </div>
    )
}
