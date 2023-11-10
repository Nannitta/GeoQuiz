export type ButtonProps = {
  text?: string
  className?: string
  children?: Image
}

type Image = React.ReactElement<string, string>