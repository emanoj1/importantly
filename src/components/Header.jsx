export default function Header() {
    return (
      <header style={styles.header}>
        <div style={styles.inner}>
          <strong>Importantly</strong>
          <nav style={styles.nav}>
            <a href="#apps">Apps</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
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
      background: "rgba(15,23,42,0.85)",
      backdropFilter: "blur(8px)",
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
    nav: {
      display: "flex",
      gap: "24px",
    },
  };
  