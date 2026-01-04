import type { Product, StatCard, User } from "../types/admin";

export const stats: StatCard[] = [
  { label: "Total Users", value: "1,245", hint: "+12 this week" },
  { label: "Revenue", value: "$18,320", hint: "+4.2%" },
  { label: "Orders", value: "392", hint: "today" },
  { label: "Tickets", value: "27", hint: "open" },
];

export const users: User[] = [
  { id: "u1", name: "Aarav Shrestha", email: "aarav@example.com", role: "Admin", status: "Active" },
  { id: "u2", name: "Sita Karki", email: "sita@example.com", role: "Staff", status: "Active" },
  { id: "u3", name: "Bikash Rai", email: "bikash@example.com", role: "Viewer", status: "Blocked" },
];

export const products: Product[] = [
  { id: "p1", title: "Premium Plan", price: 19.99, stock: 999, status: "Active" },
  { id: "p2", title: "Starter Plan", price: 9.99, stock: 999, status: "Active" },
  { id: "p3", title: "Legacy Plan", price: 4.99, stock: 0, status: "Archived" },
];
