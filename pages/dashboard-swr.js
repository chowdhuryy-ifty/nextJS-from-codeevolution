import useSWR from 'swr'

const fetcher = async () => {
    const response = await fetch(`http://localhost:4000/dashboard`)
    return await response.json()
}

export default function DashboardSwr() {
    const {data, error} = useSWR('dashboard', fetcher)

    if (error) return 'An error has occurred'
    if (!data) return 'Loading ............'
    return (
        <div>
            <h2>Dashboard Data-SWR</h2>
            <h2>Posts - {data.posts}</h2>
            <h2>Likes - {data.likes}</h2>
            <h2>Followers - {data.followers}</h2>
            <h2>Following - {data.following}</h2>
        </div>
    )
}