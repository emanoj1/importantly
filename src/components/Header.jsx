import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        <Link to="/" style={styles.brand}>
          Importantly
        </Link>
        <nav style={styles.nav}>
          <a href="/#apps">Products</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: "fixed",
    top: 0,
    width: "100%",
    background: "rgba(248,250,252,0.9)",
    borderBottom: "1px solid var(--border)",
    zIndex: 10,
  },
  inner: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: {
    letterSpacing: "0.3px",
    color: "var(--text)",
    fontWeight: 700,
    textDecoration: "none",
  },
  nav: {
    display: "flex",
    gap: "24px",
    fontSize: "15px",
  },
};
