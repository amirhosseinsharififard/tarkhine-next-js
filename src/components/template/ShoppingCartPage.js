import EmptyShop from "../module/shopping/EmptyShop";
import StatusShopping from "../module/shopping/StatusShopping";

export default function ShoppingCartPage() {
  return (
    <div className="max-w-screen-2xl m-auto">
      <div className="mx-5 my-6 md:my-10 md:grid grid-cols-12">
        
        <StatusShopping step={0} />
        
        {true && <EmptyShop />}


      </div>
    </div>
  );
}
