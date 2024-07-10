interface IProps {
  msg: string;
}

const ErrorMessage = ({msg}: IProps) => {
  return (
    <div className="text-red-500 block font-semibold text-sm">{msg}</div>
  )
}

export default ErrorMessage;