import { useMemo, useState } from "react";
import { products as seedProducts } from "../data/dummy";

type Product = {
  id: string;
  title: string;
  price: number;
  stock: number;
  status: "Active" | "Archived";
};

export default function Products() {
  // If your dummy.ts doesn't have stock/status, we convert safely here
  const initial: Product[] = seedProducts.map((p: any) => ({
    id: p.id,
    title: p.title,
    price: Number(p.price ?? 0),
    stock: Number(p.stock ?? 0),
    status: (p.status ?? "Active") as Product["status"],
  }));

  const [products, setProducts] = useState<Product[]>(initial);
  const [minStock, setMinStock] = useState<number>(0);
  const [showArchived, setShowArchived] = useState<boolean>(true);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (!showArchived && p.status === "Archived") return false;
      if (p.stock < minStock) return false;
      return true;
    });
  }, [products, minStock, showArchived]);

  function toggleArchive(id: string) {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, status: p.status === "Active" ? "Archived" : "Active" }
          : p
      )
    );
  }

  return (
    <div style={styles.wrap}>
      <div style={styles.header}>
        <div style={styles.leftControls}>
          <label style={styles.label}>
            Min stock:
            <input
              type="number"
              value={minStock}
              onChange={(e) => setMinStock(Number(e.target.value))}
              style={styles.input}
              min={0}
            />
          </label>

          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={showArchived}
              onChange={(e) => setShowArchived(e.target.checked)}
            />
            Show archived
          </label>
        </div>

        <div style={styles.count}>{filtered.length} items</div>
      </div>

      <div style={styles.grid}>
        {filtered.map((p) => (
          <div key={p.id} style={styles.card}>
            <div style={styles.titleRow}>
              <div style={styles.title}>{p.title}</div>
              <span style={pill(p.status)}>{p.status}</span>
            </div>

            <div style={styles.meta}>Price: ${p.price.toFixed(2)}</div>
            <div style={styles.meta}>Stock: {p.stock}</div>

            <button style={styles.button} onClick={() => toggleArchive(p.id)}>
              {p.status === "Active" ? "Archive" : "Unarchive"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: { padding: 18 },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  leftControls: { display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" },
  label: { display: "flex", gap: 8, alignItems: "center", fontWeight: 700 },
  input: {
    width: 100,
    padding: "8px 10px",
    borderRadius: 10,
    border: "1px solid #ddd",
    outline: "none",
  },
  checkboxLabel: { display: "flex", gap: 8, alignItems: "center", fontWeight: 700 },
  count: { fontWeight: 800, opacity: 0.75 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 12,
  },
  card: {
    background: "#666161ff",
    border: "1px solid #ddd",
    borderRadius: 12,
    padding: 14,
  },
  titleRow: { display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" },
  title: { fontWeight: 900, fontSize: 16 },
  meta: { marginTop: 8, fontWeight: 600, opacity: 0.8 },
  button: {
    marginTop: 12,
    width: "100%",
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid #ddfb84ff",
    background: "#111",
    color: "#f8f87fff",
    fontWeight: 800,
    cursor: "pointer",
  },
};

function pill(status: "Active" | "Archived"): React.CSSProperties {
  return {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid #312c2cff",
    fontSize: 12,
    fontWeight: 900,
    background: status === "Active" ? " #43a431ff" : "#ff6666ff",
  };
}
