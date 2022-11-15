import {useRouter} from "next/router";

export default function ReviewId() {
    const router = useRouter()
    const {productId, reviewId} = router.query
    return (
        <>
            <h1>Review about {reviewId} product {productId}</h1>
        </>
    )
}