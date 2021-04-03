import { useForm, FormProvider } from "react-hook-form";
import { AdditionSection } from "./sections/AdditionSection";
import { GeneralSection } from "./sections/GeneralSection";
import { SubtractionSection } from "./sections/SubtractionSection";

export const Settings: React.FC = () => {
  const methods = useForm();
  const onSubmit = (data: any) => console.log("form data", data);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <GeneralSection />
        <AdditionSection />
        <SubtractionSection />
      </form>
    </FormProvider>
  );
};
