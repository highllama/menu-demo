import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";

interface ModifierInputProps {
  name: string;
  price: number;
  type: "checkbox" | "radio";

  handleSelectModifier: (modifier: any) => void;
  modifierId: string;
  selected: boolean;
  disabled: boolean;
}

const ModifierInput = ({
  name,
  price,
  type,
  handleSelectModifier,
  modifierId,
  selected,
  disabled,
}: ModifierInputProps) => {
  console.log(selected, modifierId);
  return (
    <div className="flex items-center justify-between py-2">
      <Field className="flex flex-row ">
        <FieldLabel
          className="text-lg font-normal text-gray-600"
          htmlFor={name}
        >
          {name}
        </FieldLabel>
        <FieldContent>
          {type === "checkbox" ? (
            <Checkbox
              className="w-6 h-6"
              disabled={disabled}
              id={name}
              checked={selected}
              onCheckedChange={(checked) => {
                handleSelectModifier(modifierId);
              }}
            />
          ) : (
            <RadioGroup
              value={selected ? modifierId : null}
              onValueChange={() => {
                handleSelectModifier(modifierId);
              }}
            >
              <RadioGroupItem className={"w-6 h-6"} value={modifierId} />
            </RadioGroup>
          )}
        </FieldContent>
      </Field>
    </div>
  );
};

export default ModifierInput;
