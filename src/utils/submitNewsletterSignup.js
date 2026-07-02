export async function submitNewsletterSignup({ name, email }) {
  await fetch(
    "https://script.google.com/macros/s/AKfycbxSfakuFIu9t8oTRZTI82HxhZ7K7cSp7t3wrZ41he5WW7vncMJM2vp0gKra8txvXgCf8g/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ name, email }),
    },
  );
}
