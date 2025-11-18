//src/components/ui/Button.jsx
export default function Button({
  children,
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={
        "px-4 py-3 w-full bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-[0.98] transition-all " +
        className
      }
      style={{ textDecoration: "none" }}
      {...props}
    >
      {children}
    </button>
  );
}
