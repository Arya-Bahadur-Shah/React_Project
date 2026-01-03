type Props = {
  title: string;
};

export default function Topbar({ title }: Props) {
  return (
    <header style={styles.topbar}>
      <h1 style={styles.title}>{title}</h1>

      <div style={styles.right}>
        <input placeholder="Search..." style={styles.search} />
        <div style={styles.avatar}>A</div>
      </div>
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  topbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 18px",
    borderBottom: "1px solid #eee",
    background: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  title: { fontSize: 18, margin: 0 },
  right: { display: "flex", gap: 10, alignItems: "center" },
  search: {
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid #eee",
    outline: "none",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 999,
    display: "grid",
    placeItems: "center",
    background: "#111",
    color: "#fff",
    fontWeight: 700,
  },
};
