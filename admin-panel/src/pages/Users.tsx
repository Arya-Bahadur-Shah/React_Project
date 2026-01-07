import { useMemo, useState } from "react";
import { users as seedUsers } from "../data/dummy";
import type { User } from "../types/admin";

export default function Users() {
  const [users, setUsers] = useState<User[]>(seedUsers);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return users;
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.role.toLowerCase().includes(q)
    );
  }, [query, users]);

  function toggleStatus(id: string) {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "Active" ? "Blocked" : "Active" }
          : u
      )
    );
  }

  return (
    <div style={{ padding: 18 }}>
      <div style={styles.header}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search users..."
          style={styles.search}
        />
        <span style={styles.count}>{filtered.length} users</span>
      </div>

      <div style={styles.tableWrap}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Role</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr key={u.id}>
                <td style={styles.td}><b>{u.name}</b></td>
                <td style={styles.td}>{u.email}</td>
                <td style={styles.td}>{u.role}</td>
                <td style={styles.td}>
                  <span style={pill(u.status)}>{u.status}</span>
                </td>
                <td style={styles.td}>
                  <button
                    onClick={() => toggleStatus(u.id)}
                    style={styles.btn}
                  >
                    {u.status === "Active" ? "Block" : "Unblock"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: { display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 12 },
  search: {
    flex: 1,
    maxWidth: 420,
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid #f64848ff",
    outline: "none",
  },
  count: { alignSelf: "center", opacity: 0.7, fontWeight: 700 },
  tableWrap: {
    background: "#f97878ff",
    border: "1px solid #c56a6aff",
    borderRadius: 14,
    overflow: "hidden",
  },
  table: { width: "100%", borderCollapse: "collapse" },
  th: { textAlign: "left", padding: 12, fontSize: 12, opacity: 0.7, background: "#fafafa" },
  td: { padding: 12, borderTop: "1px solid #eee" },
  btn: {
    padding: "8px 10px",
    borderRadius: 10,
    border: "1px solid #85f072ff",
    background: "#111",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 700,
  },
};

function pill(status: "Active" | "Blocked"): React.CSSProperties {
  return {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 800,
    border: "1px solid #eee",
    background: status === "Active" ? "#77f394ff" : "#ff0000ff",
  };
}
