import {useRouter} from "next/router";

export default function Post({post}) {
    const router = useRouter()

    if (router.isFallback) {
        return <h1>Loading..........</h1>
    }
    return (
        <>
            {post.id} {post.title}
            {post.userId}
            <p>{post.body}</p>

        </>
    )
}

export async function getStaticPaths() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json()

    const paths = data.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })

    return {
        paths,
        fallback: true
    }

}

export async function getStaticProps(ctx) {
    const {params} = ctx
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    if (!data.id) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post: data,
        },
    }
}