export type User = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Staff" | "Viewer";
  status: "Active" | "Blocked";
};

export type Product = {
  id: string;
  title: string;
  price: number;
  stock: number;
  status: "Active" | "Archived";
};

export type StatCard = {
  label: string;
  value: string;
  hint?: string;
};
