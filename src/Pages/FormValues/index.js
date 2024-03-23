import { useSelector } from "react-redux";
import "./style.css";
export default function FormValues() {
  const values = useSelector((state) => state.form.formValues);

  return (
    <div>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
}
