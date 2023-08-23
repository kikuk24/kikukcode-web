
// eslint-disable-next-line react/prop-types
const ItemFooter = ({ Links, title }) => {
  return (
    <div>
      <h1 className="mb-4 font-semibold text-xl">{title}</h1>
      {
        // eslint-disable-next-line react/prop-types
        Links.map((link) => (
          <li key={link.name} className="mb-4 list-none text-slate-500"><a href={link.link}>{link.name}
          </a></li>
        ))
      }
        
    </div>
  )
}

export default ItemFooter