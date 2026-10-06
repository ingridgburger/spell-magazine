import closedImage from "../assets/images/closed.webp";
import openImage from "../assets/images/open.png"
import SplitContactLayout from "../components/SplitContactLayout";
import "./Submit.css";

function Submit() {
  return (
    <SplitContactLayout
      imageSrc={openImage}
      imageAlt="Submission period open"
      imageClassName="submit-page-layout-image image-shadow-dark"
      title={
        <>
          SUBMISSIONS ARE <span className="text-header-emphasized">OPEN</span>
          .
        </>
      }
      bodyContent={
        <>
          <p className="text-body split-contact-layout-body">
            Calling on artists of ALL art mediums! Submissions are now open for our fifth edition of SPELL.
          </p>
          <p className="text-body split-contact-layout-body">
             All information is included in the submission form, linked below:
          </p>
        </>
      }
      buttonLabel="SUBMIT YOUR ART"
      buttonHref="https://docs.google.com/forms/d/e/1FAIpQLSfmeOfxLJAZDG_dU55PXj49kr_aETbf6zXpQ67VkSNOxdR4QA/viewform"
      buttonExternal
    />
  );
}

export default Submit;
