import { getUsers } from "@/lib/data/users"

async function AdminPage() {
    const users = await getUsers();

  return (
    <div>
        { users.map((d, k) => 
            <div key={k}>{d.username}</div>
        )}
    </div>
  )
}

export default AdminPage