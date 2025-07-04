import { classNames } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90",
        secondary:
          "border-2 border-primary bg-transparent text-primary hover:bg-secondary/90",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export type ButtonProps = {
  label?: string;
  onClick?: () => void;
  className?: string;
} & VariantProps<typeof buttonVariants>;

const Button = ({ label, onClick, className, variant, size }: ButtonProps) => {
  return (
    <button
      // className="border-2 border-primary bg-white text-primary hover:bg-primary/90 hover:text-white rounded-md px-4 py-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
      className={classNames(
        buttonVariants({ variant, size }),
        className,
        "cursor-pointer"
      )}
      type="button"
      aria-label={label}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default Button;
