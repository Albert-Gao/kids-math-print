import { Field } from "./components/Field";
import { Section } from "./components/Section";

export const GeneralSection: React.FC = () => {
  return (
    <Section
      title="General"
      description="general settings which apply to all sections below"
    >
      <div className="sm:col-span-2">
        <Field label="Quantity" id="generalQuantity" type="number" />
      </div>

      <div className="sm:col-span-2">
        <Field
          label="Addition Ratio"
          id="generalAdditionRatio"
          type="number"
          defaultValue={0.6}
        />
      </div>

      <div className="sm:col-span-2">
        <Field
          label="Subtraction Ratio"
          id="generalSubtractionRatio"
          type="number"
          defaultValue={0.4}
        />
      </div>
    </Section>
  );
};
