import { Field } from "./components/Field";
import { Section } from "./components/Section";

export const AdditionSection: React.FC = () => {
  return (
    <Section title="Addition (+))" description="settings for addition">
      <div className="sm:col-span-2">
        <Field
          label="Max limit of result"
          id="additionMaxLimit"
          type="number"
          defaultValue={9999}
        />
      </div>

      <div className="sm:col-span-2">
        <Field
          label="Minimum number"
          id="additionMinNum"
          type="number"
          defaultValue={99}
        />
      </div>

      <div className="sm:col-span-2">
        <Field
          label="Maximum number"
          id="additionMaxNum"
          type="number"
          defaultValue={999}
        />
      </div>
    </Section>
  );
};
