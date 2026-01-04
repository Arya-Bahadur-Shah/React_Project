import { stats } from "../data/dummy";

export default function Dashboard() {
  return (
    <div style={{ padding: 18 }}>
      <div style={styles.grid}>
        {stats.map((s) => (
          <div key={s.label} style={styles.card}>
            <div style={styles.label}>{s.label}</div>
            <div style={styles.value}>{s.value}</div>
            {s.hint && <div style={styles.hint}>{s.hint}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 12,
  },
  card: {
    background: "#fff",
    border: "1px solid #eee",
    borderRadius: 14,
    padding: 14,
  },
  label: { fontSize: 12, opacity: 0.7, fontWeight: 700 },
  value: { fontSize: 22, fontWeight: 800, marginTop: 6 },
  hint: { fontSize: 12, opacity: 0.7, marginTop: 8 },
};
