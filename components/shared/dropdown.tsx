type DropdownProps = {
  children: React.ReactNode;
  trigger: "hover" | "click";
  contentClassName?: string;
  dropdownClassname?: string;
  option?: string;
  options: React.ReactNode[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Dropdown: React.FC<DropdownProps> = ({
  children,
  trigger,
  options,
  contentClassName = "",
  dropdownClassname = "",
  open,
  setOpen,
}) => {
  return (
    <div
      className={`relative ${contentClassName}`}
      onMouseEnter={() => trigger === "hover" && setOpen(true)}
      onMouseLeave={() => trigger === "hover" && setOpen(false)}
      onClick={() => trigger === "click" && setOpen(!open)}
    >
      {children}

      <div
        className={`${
          open ? "h-fit max-h-screen" : "max-h-0"
        } bg-secondary-500 absolute z-30 right-0 w-fit overflow-hidden transition-all duration-500 ${dropdownClassname}`}
      >
        {options?.map((option) => option)}
      </div>
    </div>
  );
};

export default Dropdown;
