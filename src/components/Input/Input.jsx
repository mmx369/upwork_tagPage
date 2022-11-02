export const Input = ({ className, placeholder, type, value, onChange }) => {
  return (
    <input
      className={className}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}
