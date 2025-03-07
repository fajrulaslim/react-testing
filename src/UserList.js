function UserList({ users}) {
    const renderUsers = users.map((user) => {
        return <tr key={user?.name}>
            <td>{user.name}</td>
            <td>{user.email}</td>
        </tr>
    })

    return <table>
        <thead>
            <th>Name</th>
            <th>Email</th>
        </thead>
        <tbody>
            {renderUsers}
        </tbody>
    </table>
}

export default UserList