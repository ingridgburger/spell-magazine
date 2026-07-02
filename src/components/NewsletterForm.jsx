import { useState } from "react";
import { submitNewsletterSignup } from "../utils/submitNewsletterSignup";
import "./NewsletterForm.css";

function NewsletterForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");

    setStatus("submitting");

    try {
      await submitNewsletterSignup({ name, email });
      e.target.reset();
      setStatus("success");
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  }

  return (
    <form className="connect-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="connect-input"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="connect-input"
        required
      />
      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Submitting..." : "Get In Touch"}
      </button>

      {status === "success" && (
        <p className="connect-status connect-status-success">
          Thanks! You're on the list.
        </p>
      )}
      {status === "error" && (
        <p className="connect-status connect-status-error">
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}

export default NewsletterForm;
