import printImage from "../assets/images/to-print.webp";
import SplitContactLayout from "../components/SplitContactLayout";
import "./Support.css";

function Support() {
  return (
    <SplitContactLayout
      imageSrc={printImage}
      imageAlt="SPELL Magazine laptop and print preview"
      imageClassName="support-page-layout-image"
      title={
        <>
          Help Keep Spell{" "}
          <span className="text-header-emphasized">In Print</span>.
        </>
      }
      bodyContent={
        <>
          <p className="text-body split-contact-layout-body">
            Every contribution goes directly to printing costs, so we can share
            our work with the world in a form you can hold, flip through, and
            fall into.
          </p>
          <p className="text-body split-contact-layout-body">
            Click below to make a venmo donation to our magazine. We appreciate
            your support so much.
          </p>
        </>
      }
      buttonLabel="VENMO LINK"
      buttonHref="https://venmo.com/u/spellmag"
      buttonExternal
    />
  );
}

export default Support;
