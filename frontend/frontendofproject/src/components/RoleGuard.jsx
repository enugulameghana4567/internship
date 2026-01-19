export default function RoleGuard({ role, children }) {
  const userRole = localStorage.getItem("role");
  return userRole === role ? children : null;
}
