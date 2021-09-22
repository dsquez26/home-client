import { useForm } from "react-hook-form";
import { formSection1Types } from "../../shared/interfaces";

import "./FormSection1.css";

const FormSection1 = (props: formSection1Types) => {
  const { register } = useForm();

  return (
    <>
      <div className="f-section-1-main">
        <div className="f-section-1-col-1">
          <label className="fs1-col-1" style={{ padding: "0 20px" }}>
            {props.label1}
          </label>
          <input
            className=""
            type="text"
            {...register("firstName", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="f-section-1-col-2">
          <label className="fs1-col-1" style={{ padding: "0 20px" }}>
            {props.label2}
          </label>
          <input
            className=""
            type="text"
            {...register("lastName", { required: true, maxLength: 100 })}
          />
        </div>
      </div>
    </>
  );
};

export default FormSection1;
