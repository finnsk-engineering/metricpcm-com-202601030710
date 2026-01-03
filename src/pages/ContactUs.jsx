import TextBlock from "../components/TextBlock.jsx";
import ContactDetails from "../components/ContactDetails.jsx";
import FormBlock from "../components/FormBlock.jsx";

const ContactUs = () => {
  const section1Data = {"type":"TextBlock","heading":"Contact Us","body":"We provide efficient and effective project delivery for companies in mining, construction and heavy industry. If you’d like to enquire about our services, please contact us today. We offer a free phone or on-site consultation.","images":[]};
  const section2Data = {"type":"ContactDetails","heading":"","body":"- [@METRIC-PCM](https://www.linkedin.com/company/metric-pcm)\n- [1300 MET PCM](tel:1300638726)","images":[]};
  const section3Data = {"type":"Form","heading":"","body":"First Name\n\nLast Name\n\nPhone Number\n\nEmail\n\nYour Enquiry\n\nInvalid site key.\n\nERROR for site owner: Invalid site key\n\nreCAPTCHA\n\n[Privacy](https://www.google.com/intl/en/policies/privacy/) - [Terms](https://www.google.com/intl/en/policies/terms/)\n\nSend","images":[]};

  return (
    <>
      <TextBlock data={section1Data} />
      <ContactDetails data={section2Data} />
      <FormBlock data={section3Data} />
    </>
  );
};

export default ContactUs;