import ItemFooter from "./ItemFooter"
import { RESOURCE, PRODUCTS, COMPANY,SUPPORT } from "../../data/footerData"
const ItemsContainerFooter = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 bg-[#0c1e41]">
      <ItemFooter Links={RESOURCE} title="RESOURCE" />
      <ItemFooter Links={PRODUCTS} title="PRODUCTS" />
      <ItemFooter Links={COMPANY} title="COMPANY" />
      <ItemFooter Links={SUPPORT} title="SUPPORT" />
    </div>
  )
}

export default ItemsContainerFooter