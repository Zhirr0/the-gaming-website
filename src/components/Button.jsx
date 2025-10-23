const Button = ({ id, title, leftIcon, containerClass, rightIcon }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit bg-violet-50 cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}

      <span className="inline-flex items-center justify-center gap-1 font-general text-xs uppercase">
        {title}
        {rightIcon && <span className="inline-block">{rightIcon}</span>}
      </span>
    </button>
  );
};

export default Button;
