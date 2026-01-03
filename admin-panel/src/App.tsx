import { useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

export default function App() {
  const [page, setPage] = useState("Dashboard");

  const content = useMemo(() => {
    return (
      <div style={{ padding: 18 }}>
        <p style={{ marginTop: 0 }}>
          This is <b>{page}</b> (placeholder for now).
        </p>
      </div>
    );
  }, [page]);

  return (
    <div style={styles.shell}>
      <Sidebar active={page} onNavigate={setPage} />

      <main style={styles.main}>
        <Topbar title={page} />
        {content}
      </main>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  shell: { display: "flex", minHeight: "100vh", background: "#f7f7f8" },
  main: { flex: 1, minWidth: 0 },
};
