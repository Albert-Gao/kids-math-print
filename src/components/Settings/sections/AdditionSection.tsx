import { Field } from "./components/Field";
import { Section } from "./components/Section";

export const AdditionSection: React.FC = () => {
  return (
    <Section title="Addition (+))" description="settings for addition">
      <div className="sm:col-span-2">
        <Field
          label="Max limit of result"
          id="max-limit"
          type="number"
          defaultValue={9999}
        />
      </div>

      <div className="sm:col-span-2">
        <Field
          label="Minimum number"
          id="min-num"
          type="number"
          defaultValue={99}
        />
      </div>

      <div className="sm:col-span-2">
        <Field
          label="Maximum number"
          id="max-num"
          type="number"
          defaultValue={999}
        />
      </div>
    </Section>
  );
};
