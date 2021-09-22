import { useForm } from "react-hook-form";
import { formSection3T } from "../../shared/interfaces";

import "./FormSection3.css";


const FormSection3 = (props: formSection3T) => {
  const { register } = useForm<formSection3T>();

  return (
    <div>
      <label>{props.label1}</label>
      <select
        {...register("title", {
          required: true,
        })}
      >
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>
    </div>
  );
};

export default FormSection3;
