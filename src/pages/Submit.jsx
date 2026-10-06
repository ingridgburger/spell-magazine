import closedImage from "../assets/images/closed.webp";
import SplitContactLayout from "../components/SplitContactLayout";
import "./Submit.css";

function Submit() {
  return (
    <SplitContactLayout
  
      title={
        <>
          SUBMISSIONS ARE <span className="text-header-emphasized">OPEN</span>
          .
        </>
      }
      bodyContent={
        <>
          <p className="text-body split-contact-layout-body">
            Submissions are now open for our Fall Winter 2027 edition.
          </p>
          <p className="text-body split-contact-layout-body">
             All information is included in the submission form, linked below:
          </p>
        </>
      }
      buttonLabel="SUBMIT YOUR ART"
      buttonTo="https://docs.google.com/forms/d/e/1FAIpQLSfmeOfxLJAZDG_dU55PXj49kr_aETbf6zXpQ67VkSNOxdR4QA/viewform"
    />
  );
}

export default Submit;
