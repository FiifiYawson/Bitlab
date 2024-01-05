// import { Helmet } from "react-helmet";
import JotformEmbed from "react-jotform-embed";

const Apply = () => {
  return (
    <>
      {/* <Helmet>
        <script
          type="text/javascript"
          src="https://form.jotform.com/jsform/233230093591552"
     ></script>
      </Helmet> */}
      {/* <JotformEmbed src="https://form.jotform.com/233230093591552"></JotformEmbed> */}
      <div className="form">
        <iframe
          className="thy"
          src="https://docs.google.com/forms/d/e/1FAIpQLSezPc0iXSUCMlJPPWZAefh5DrN3w27_XJWmva1T8UusQNbnTg/viewform?embedded=true"
          width="640"
          height="1976"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    
    </>
  );
};

export default Apply;
