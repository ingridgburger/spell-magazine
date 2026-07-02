import closedImage from "../assets/images/closed.webp";
import SplitContactLayout from "../components/SplitContactLayout";
import "./Submit.css";

function Submit() {
  return (
    <SplitContactLayout
      imageSrc={closedImage}
      imageAlt="Submission period closed"
      imageClassName="submit-page-layout-image"
      title={
        <>
          SUBMISSIONS ARE <span className="text-header-emphasized">CLOSED</span>
          .
        </>
      }
      bodyContent={
        <>
          <p className="text-body split-contact-layout-body">
            Thank you to everyone who submitted work for our fourth edition!
            Check back in the fall for our next submission period, and get
            excited for our Spring/Summer 2026 edition. We can't wait to share
            it with you!
          </p>
          <p className="text-body split-contact-layout-body">
            In the meantime, check out our past editions below:
          </p>
        </>
      }
      buttonLabel="READ NOW"
      buttonTo="/read"
    />
  );
}

export default Submit;
