
import { FormLayout } from "@shopify/polaris";
import { TitleInput } from "../input/TitleInput";
import { InputTextAlignment } from "../select-input/InputTextAlignment";
import { InputIndentation } from "../select-input/InputIndentation";
import { InputNumbering } from "../select-input/InputNumbering";
import { InputSectionLine } from "../select-input/InputSectionLine";
import { HeadingCheckboxGroup } from "../checkbox/HeadingCheckboxGroup";
import { ScrollCheckbox } from "../checkbox/ScrollCheckbox";
import { NumberFieldWithStepper } from "../input/InputScrollOffset";
import { InputFontSIzeOfTitle } from "../input/InputFontSIzeOfTitle";
import { InputFontSizeOfHeadings } from "../input/InputFontSizeOfHeadings";
import { GroupPadding } from "../input/input-padding/GroupPadding";
import { InputTOCMaxWidth } from "../input/InputTOCMaxWidth";
import { InputAlignment } from "../select-input/InputAlignment";
import { GroupColor } from "../color-picker/GroupColor";
import { LinkHoverStyle } from "../select-input/linkHoverStyle";
import { ToggleButton } from "../checkbox/ToggleButton";
import { InputHideBtn } from "../input/InputHideBtn";
import { InputShowBtn } from "../input/InputShowBtn";
import { ShowAllButton } from "../input/InputShowAllButton";
import { LinkHover } from "../color-picker/LinkHover";
import { ShowBtnName } from "../color-picker/ShowBtnName";
import { HideBtnName } from "../color-picker/HideBtnName";

export const TOCForm = () => {


  return (
    <form >
      <FormLayout>
        <TitleInput />
        <InputTextAlignment />
        <InputIndentation />
        <InputNumbering />
        <InputSectionLine />
        <HeadingCheckboxGroup />
        <ScrollCheckbox />
        <NumberFieldWithStepper />
        <InputFontSIzeOfTitle />
        <InputFontSizeOfHeadings />
        <GroupPadding />
        <InputTOCMaxWidth />
        <InputAlignment />
        <GroupColor />
        <LinkHoverStyle />
        <ToggleButton />
        <InputHideBtn />
        <InputShowBtn />
        <ShowAllButton />
        <LinkHover />
        <ShowBtnName />
        <HideBtnName />
      </FormLayout>
    </form>
  );
};
