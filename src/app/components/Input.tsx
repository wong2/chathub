import cx from 'classnames'
import { FC, HTMLProps } from 'react'
import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize'

type InputProps = HTMLProps<HTMLInputElement>

export const Input: FC<InputProps> = (props) => {
  const { className, ...extraProps } = props
  return (
    <input
      className={cx(
        'px-3 py-1.5 outline-none text-[var(--text-1)] text-sm  block rounded-md border-0  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-[var(--bg-2)]',
        className,
      )}
      {...extraProps}
    />
  )
}

export const Textarea: FC<TextareaAutosizeProps> = (props) => {
  const { className, ...extraProps } = props
  return (
    <TextareaAutosize
      className={cx(
        'px-3 py-1.5 outline-none text-[var(--text-1)] text-sm  block rounded-md border-0  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-[var(--bg-2)]',
        className,
      )}
      minRows={2}
      maxRows={5}
      {...extraProps}
    />
  )
}
