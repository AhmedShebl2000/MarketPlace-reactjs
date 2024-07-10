import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {

}

const Input = ({...rest}: IProps) => {
  return (
      <input {...rest} className="border-l border-gray-300 shadow-md
    focus:border-indigo-500 focus:ring-3 focus:ring-indigo-500 rounded-md
    px-3 py-3 text-md" />
  )
}

export default Input;