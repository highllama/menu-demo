import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

import ModifierInput from "../ModifierInput";
import { useState } from "react";

interface ModifierGroupProps {
  modifiers: Array<any>;
  name: string;
  minSelections: number;
  maxSelections: number;
}

const ModifierGroup = ({
  modifiers,
  name,
  minSelections,
  maxSelections,
}: ModifierGroupProps) => {
  const isSingleChoice = minSelections === 1 && maxSelections === 1;
  const [selectedModifiers, setSelectedModifiers] = useState(
    modifiers.filter((modifier) => modifier.defaultSelection),
  );

  const handleSelectModifier = (modifierId: any) => {
    const modifier = modifiers.find((modifier) => modifier.id === modifierId);
    const added = selectedModifiers.find(
      (modifier) => modifier.id === modifierId,
    );

    if (isSingleChoice) {
      setSelectedModifiers([modifier]);
      return;
    }
    if (added) {
      setSelectedModifiers(
        selectedModifiers.filter((modifier) => modifier.id !== modifierId),
      );
    } else {
      if (selectedModifiers.length < maxSelections) {
        setSelectedModifiers([...selectedModifiers, modifier]);
      }
    }
  };

  return (
    <div>
      <Accordion defaultValue={["item-1"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl items-center font-semibold">
            {name}
            {(isSingleChoice || minSelections > 0) && (
              <Badge variant="outline" className="text-xs ml-2">
                Requerido&nbsp;
                {minSelections > 0 &&
                  !isSingleChoice &&
                  `(${minSelections} mínimo, ${maxSelections} máximo)`}
              </Badge>
            )}
          </AccordionTrigger>
          <AccordionContent>
            {modifiers.map((modifier) => (
              <ModifierInput
                key={modifier.id}
                name={modifier.name}
                price={modifier.price}
                modifierId={modifier.id}
                type={isSingleChoice ? "radio" : "checkbox"}
                handleSelectModifier={handleSelectModifier}
                selected={!!selectedModifiers.find((s) => s.id === modifier.id)}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ModifierGroup;
