import { useForm } from "react-hook-form";
import FormSection1 from "../FormSection1/FormSection1";
import FormSection2 from "../FormSection2/FormSection2";

import "./Application.css";

interface ApplicationFormData {
  firstName: String;
  lastName: String;
  email: String;
  phoneNumber: Number;
  title: Number;
}

const Application = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationFormData>();
  const onSubmit = (data: ApplicationFormData) => {
    alert(JSON.stringify(data));
  };
  console.log(errors);

  return (
    <fieldset className="app-fieldset">
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="form-section-1">
          <FormSection1 label1="First Name" label2="Last Name" />
          <FormSection2 label1="Phone Number" label2="Email" />      
        </section>
        <input type="submit" />
      </form>
    </fieldset>
  );
};

export default Application;
