package vinay.model;
public class Items {
	
	private String ProductName;
	private int productId;
	private double price;
	private int quantity;
	public String getProductName() {
		return ProductName;
	}
	public void setProductName(String productName) {
		ProductName = productName;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public Items() {

	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public Items(String productName, int productId, double price, int quantity) {
	
		ProductName = productName;
		this.productId = productId;
		this.price = price;
		this.quantity = quantity;
	}
	@Override
	public String toString() {
		return "Items [ProductName=" + ProductName + ", productId=" + productId + ", price=" + price + ", quantity="
				+ quantity + "]";
	}
	
	

}