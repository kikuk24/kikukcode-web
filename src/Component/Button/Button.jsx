/* eslint-disable react/prop-types */

const Button = (props) => {
  const { children, type = "button", color  } = props
  return (
    <button className={` ${color} text-white font-bold py-2 px-4 rounded duration-500`} type={type}>{children}</button>
  )
}

export default Button