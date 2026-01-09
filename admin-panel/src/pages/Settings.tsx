import { useMemo, useState } from "react";

export default function Settings() {
  const [siteName, setSiteName] = useState("Admin Panel");
  const [maintenance, setMaintenance] = useState(false);
  const [theme, setTheme] = useState<"Light" | "Dark">("Light");

  const preview = useMemo(() => {
    return `${siteName} • Theme: ${theme} • ${maintenance ? "Maintenance ON" : "Maintenance OFF"}`;
  }, [siteName, theme, maintenance]);

  return (
    <div style={styles.wrap}>
      <div style={styles.card}>
        <h2 style={styles.h2}>Settings</h2>

        <label style={styles.label}>
          Site name
          <input
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            style={styles.input}
            placeholder="Enter site name"
          />
        </label>

        <label style={styles.label}>
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as any)}
            style={styles.input}
          >
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        </label>

        <label style={styles.checkbox}>
          <input
            type="checkbox"
            checked={maintenance}
            onChange={(e) => setMaintenance(e.target.checked)}
          />
          Maintenance mode
        </label>

        <div style={styles.preview}>
          <div style={{ fontWeight: 900, marginBottom: 6 }}>Preview</div>
          <div style={{ opacity: 0.85 }}>{preview}</div>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: { padding: 18, maxWidth: 560 },
  card: {
    background: "#645e5eff",
    border: "1px solid #ddd",
    borderRadius: 12,
    padding: 14,
  },
  h2: { margin: 0, marginBottom: 12 },
  label: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    fontWeight: 800,
    marginTop: 12,
  },
  input: {
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid #ddd",
    outline: "none",
    background: "#767070ff",
  },
  checkbox: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    marginTop: 14,
    fontWeight: 800,
  },
  preview: {
    marginTop: 14,
    padding: 12,
    borderRadius: 10,
    border: "1px solid #fff9f9ff",
    background: "#686565ff",
  },
};
