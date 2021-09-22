import { useForm } from "react-hook-form";
import { formSection2Types } from "../../shared/interfaces";

import "./FormSection2.css";


const FormSection2 = (props: formSection2Types) => {
  const { register } = useForm();

  return (
    <>
      <div className="f-section-2-main">
        <div>
          <label style={{ padding: "0 20px" }}>{props.label1}</label>
          <input
            type="tel"
            {...register("phoneNumber", {
              required: true,
              maxLength: 11,
              minLength: 8,
            })}
          />
        </div>
        <div>
          <label style={{ padding: "0 20px" }}>{props.label2}</label>
          <input
            type="text"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
        </div>
      </div>
    </>
  );
};

export default FormSection2;
