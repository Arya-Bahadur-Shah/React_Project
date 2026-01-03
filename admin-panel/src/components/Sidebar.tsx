type Props = {
  active: string;
  onNavigate: (page: string) => void;
};

const items = ["Dashboard", "Users", "Products", "Settings"];

export default function Sidebar({ active, onNavigate }: Props) {
  return (
    <aside style={{ width: 220, padding: 16, borderRight: "1px solid #ddd" }}>
      <h3>Admin Panel</h3>

      {items.map((item) => (
        <button
          key={item}
          onClick={() => onNavigate(item)}
          style={{
            display: "block",
            width: "100%",
            padding: 10,
            marginTop: 6,
            fontWeight: active === item ? "bold" : "normal",
          }}
        >
          {item}
        </button>
      ))}
    </aside>
  );
}
