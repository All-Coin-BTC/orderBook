Under pages the tsx files are positioned in folders relative to how they are viewed by the end user. For example in the Supplier folder, all of those pages will be visible to the user when they are logged in as a Supplier. All of the warehouse will be viewed by someone logged in as a warehouse user.

The redux is broken down essentially the same way. Under supplierView, those are all things that are harvested from the supplier's input. and same for warehouse.

The redux files supplierToWarehouse and WarehouseToSupplier represent which way the data is flowing. supplierToWarehouse is a request to sell goods to a warehouse.
WarehouseToSupplier is a request to buy goods from a supplier.

<!-- // working ?s -->
