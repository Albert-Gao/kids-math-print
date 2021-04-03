import { Field } from "./components/Field";
import { Section } from "./components/Section";

export const SubtractionSection: React.FC = () => {
  return (
    <Section title="Subtraction (-)" description="setting for subtraction">
      <div className="sm:col-span-3">
        <Field
          label="Minimum limit of result"
          id="min-limit-subtraction"
          type="number"
          defaultValue={0}
        />
      </div>

      <div className="sm:col-span-3">
        <Field
          label="Maximum limit of result"
          id="max-limit-subtraction"
          type="number"
          defaultValue={20}
        />
      </div>

      <div className="sm:col-span-3">
        <Field
          label="Minimum number"
          id="min-num-subtraction"
          type="number"
          defaultValue={1}
        />
      </div>

      <div className="sm:col-span-3">
        <Field
          label="Maximum number"
          id="max-num-subtraction"
          type="number"
          defaultValue={20}
        />
      </div>
    </Section>
  );
};
