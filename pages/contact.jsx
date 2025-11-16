export default function Contact() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Contact</h1>
      <p>You can reach me directly at <strong>info@jotobo.com</strong>.</p>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        style={{ marginTop: '1rem' }}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <input name="name" placeholder="Your Name" />
        </p>
        <p>
          <input name="email" placeholder="Your Email" />
        </p>
        <p>
          <textarea name="message" placeholder="Message" />
        </p>
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
