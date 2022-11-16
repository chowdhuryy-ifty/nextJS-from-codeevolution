export default function User({user}) {
    return (
        <ul>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.address.street}</p>
            <br/>
        </ul>
    )
}