export default function UserInput({ label, textarea, ref, ...props }) {
  const cssClasses =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  const field = textarea ? (
    <textarea ref={ref} name="" id="" className={cssClasses}></textarea>
  ) : (
    <input ref={ref} {...props} className={cssClasses} />
  );

  return (
    <p className="flex flex-col gap-1 my-4">
      <label htmlFor="" className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {field}
    </p>
  );
}
