import { cn } from "../../utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[23rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-8xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-white/[.75] border border-dustyBrown justify-between flex flex-col",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 text-white transition duration-200">
        {icon}
        <div className=" font-French font-bold text-black/[.75] mb-2 mt-2">
          {title}
        </div>
        <div className="font-serif text-sm font-normal text-black/[.75]">
          {description}
        </div>
      </div>
    </div>
  );
};
