import { Button as ShadcnButton, buttonVariants } from "@/components/ui/button";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { type VariantProps } from "class-variance-authority";

const Button = ({
  children,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) => {
  return <ShadcnButton {...props}>{children}</ShadcnButton>;
};

export default Button;
