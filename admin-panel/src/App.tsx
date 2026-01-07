import { useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

export default function App() {
  const [page, setPage] = useState("Dashboard");

  const content = useMemo(() => {
    if (page === "Dashboard") return <Dashboard />;
    if (page === "Users") return <Users />;
    return (
      <div style={{ padding: 18 }}>
        <p style={{ marginTop: 0 }}>
          This is <b>{page}</b>.
        </p>
      </div>
    );
  }, [page]);

  return (
    <div style={styles.shell}>
      <Sidebar active={page} onNavigate={setPage} />

      <main style={styles.main}>
        <Topbar title={page} />
        <section style={styles.content}>{content}</section>
      </main>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  shell: {
    display: "flex",
    width: "100vw",
    height: "100vh",
  },
  main: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: 1,
    minHeight: 0, // critical for proper scrolling in flex layouts
    overflowY: "auto",
  },
};
