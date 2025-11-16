export default function Contact() {
  return (
    <main style={{padding:'2rem', fontFamily:'sans-serif'}}>
      <h1>Contact</h1>
      <p>Email: info@jotobo.com</p>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p><input name="name" placeholder="Your Name" /></p>
        <p><input name="email" placeholder="Your Email" /></p>
        <p><textarea name="message" placeholder="Message"></textarea></p>
        <button type="submit">Send</button>
      </form>
    </main>
  );
}