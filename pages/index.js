import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {

    return (
        <div className={styles.container}>
            <button className='btn btn-primary'>Yooo mate</button>
            <h2>Testing h2</h2>
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
