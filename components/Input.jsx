const Input = ({ placeholder, value, type = "text", onChange, disabled, label, }) => {
    return (<div className="w-full">
      {label && (<p className="text-xl dark:text-white text-black font-semibold mb-2">
          {label}
        </p>)}
      <input disabled={disabled} onChange={onChange} value={value} placeholder={placeholder} type={type} className="
          w-full
          p-4 
          text-lg 
          dark:bg-black 
          bg-white
          border-2
          dark:border-neutral-800 
          border-neutral-200
          rounded-md
          outline-none
          dark:text-white
          text-black
          focus:border-sky-500
          focus:border-2
          transition
          dark:disabled:bg-neutral-900
          disabled:bg-neutral-200
          disabled:opacity-70
          disabled:cursor-not-allowed
        "/>
    </div>);
};
export default Input;