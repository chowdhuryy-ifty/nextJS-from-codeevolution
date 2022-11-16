export default function User({user}) {
    return (
        <ul>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <br/>
        </ul>
    )
}