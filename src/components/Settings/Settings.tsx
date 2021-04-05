import { useForm, FormProvider } from "react-hook-form";
import { AdditionSection } from "./sections/AdditionSection";
import { FormButtons } from "./sections/components/FormButtons";
import { GeneralSection } from "./sections/GeneralSection";
import { SubtractionSection } from "./sections/SubtractionSection";
import { Config } from "./sections/utils/Config";

export const Settings: React.FC<{ closeModal: () => void }> = ({
  closeModal,
}) => {
  const config = new Config();

  const methods = useForm({
    defaultValues: {
      generalQuantity: config.overall.quantity,
      generalAdditionRatio: config.overall.additionRatio,
      generalSubtractionRatio: config.overall.subtractionRatio,

      additionMaxLimit: config.addition.maxLimitOfResult,
      additionMinNum: config.addition.minNum,
      additionMaxNum: config.addition.maxNum,

      subtractionMinLimit: config.subtraction.minLimitOfResult,
      subtractionMaxLimit: config.subtraction.maxLimitOfResult,
      subtractionMinNum: config.subtraction.minNum,
      subtractionMaxNum: config.subtraction.maxNum,
    },
  });

  return (
    <FormProvider {...methods}>
      <form>
        <GeneralSection />
        <AdditionSection />
        <SubtractionSection />
        <FormButtons
          onSubmit={methods.handleSubmit((value) => {
            config.saveItem(
              Config.KEY.OVERALL_QUANTITY.KEY,
              value.generalQuantity
            );
            config.saveItem(
              Config.KEY.OVERALL_ADDITION_RATIO.KEY,
              value.generalAdditionRatio
            );
            config.saveItem(
              Config.KEY.OVERALL_SUBTRACTION_RATIO.KEY,
              value.generalSubtractionRatio
            );

            config.saveItem(
              Config.KEY.ADDITION_MAX_LIMIT_OF_RESULT.KEY,
              value.additionMaxLimit
            );
            config.saveItem(
              Config.KEY.ADDITION_MIN_NUM.KEY,
              value.additionMinNum
            );
            config.saveItem(
              Config.KEY.ADDITION_MAX_NUM.KEY,
              value.additionMaxNum
            );

            config.saveItem(
              Config.KEY.SUBTRACTION_MIN_LIMIT_OF_RESULT.KEY,
              value.subtractionMinLimit
            );
            config.saveItem(
              Config.KEY.SUBTRACTION_MAX_LIMIT_OF_RESULT.KEY,
              value.subtractionMaxLimit
            );
            config.saveItem(
              Config.KEY.SUBTRACTION_MIN_NUM.KEY,
              value.subtractionMinNum
            );
            config.saveItem(
              Config.KEY.SUBTRACTION_MAX_NUM.KEY,
              value.subtractionMaxNum
            );

            closeModal();
          })}
          closeModal={closeModal}
        />
      </form>
    </FormProvider>
  );
};
