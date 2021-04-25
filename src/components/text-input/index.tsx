import classnames from 'classnames'
import styles from './text-input.module.css'

type TextInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

function TextInput({ className, ...props }: TextInputProps) {
  return (
    <input
      type="text"
      {...props}
      className={classnames(styles.input, className)}
    />
  )
}

export default TextInput
