import { useForm } from "react-hook-form";
import "./FormSection3.css";

interface formSection3T {
  label1: string;
  title: string; //why did i have to do this?? dont leave...fix later
}

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
