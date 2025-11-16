// pages/index.jsx
export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Justicia O.</h1>
      <p>Experienced Project Management Professional, Researcher, Author and Educator.</p>
      <nav>
        <a href="/about">About</a> |{" "}
        <a href="/services">Services</a> |{" "}
        <a href="/contact">Contact</a>
      </nav>
    </main>
  );
}
