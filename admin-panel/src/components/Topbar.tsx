type Props = {
  title: string;
};

export default function Topbar({ title }: Props) {
  return (
    <header style={styles.topbar}>
      <h1 style={styles.title}>{title}</h1>

      <div style={styles.right}>
       <span> <input placeholder="Search..." style={styles.search} />
       </span>
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
    padding: "20px 18px",
    borderBottom: "1px solid #eee",
    background: "#62797aff",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  title: { fontSize: 18, margin: 9 },
  right: { display: "flex", gap: 10, alignItems: "center" },
  search: {
    padding: "10px 20px",
    borderRadius: 10,
    border: "1px solid #eee",
    outline: "none",
  },
  avatar: {
    width: 100,
    height: 36,
    borderRadius: 999,
    display: "grid",
    placeItems: "center",
    background: "#111",
    color: "#eda2a2ff",
    fontWeight: 700,
  },
};
