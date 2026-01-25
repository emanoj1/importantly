export default function Footer() {
    return (
      <footer style={styles.footer}>
        <div style={styles.inner}>
          <p>© {new Date().getFullYear()} Importantly | Made with ❣️ in Australia 🐨</p>
        </div>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      borderTop: "1px solid var(--border)",
      marginTop: "120px",
    },
    inner: {
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "32px 24px",
      color: "var(--muted)",
      fontSize: "14px",
    },
  };
  