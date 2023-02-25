export function Header(props) {
  return (
    <div>
      <h1>This is a header</h1>
      <p>{props.message}</p>
      <p>{props.children}</p>
    </div>
  )
}

export function Body() {
  return (
    <div>Hello</div>
  )
}

