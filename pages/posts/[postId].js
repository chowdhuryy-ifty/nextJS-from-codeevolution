export default function Post({post}) {
    return (
        <>
            {post.id} {post.title}
            {post.userId}
            <p>{post.body}</p>

        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    postId: '1'
                }
            }
        ],
        fallback: false,
    }
}

export async function getStaticProps(ctx) {
    const {params} = ctx
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    return {
        props: {
            post: data,
        },
    }
}