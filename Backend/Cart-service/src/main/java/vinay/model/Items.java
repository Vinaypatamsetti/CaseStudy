package vinay.model;

public class Items {
	
	private String ProductName;
	private int productId;
	private double price;
	 private int quantity;
	 private String image;
	
	public Items() {
		
	}

	public String getProductName() {
		return ProductName;
	}

	public void setProductName(String productName) {
		ProductName = productName;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
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

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Items(String productName, int productId, double price, int quantity, String image) {
		
		ProductName = productName;
		this.productId = productId;
		this.price = price;
		this.quantity = quantity;
		this.image = image;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((ProductName == null) ? 0 : ProductName.hashCode());
		result = prime * result + ((image == null) ? 0 : image.hashCode());
		long temp;
		temp = Double.doubleToLongBits(price);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + productId;
		result = prime * result + quantity;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Items other = (Items) obj;
		if (ProductName == null) {
			if (other.ProductName != null)
				return false;
		} else if (!ProductName.equals(other.ProductName))
			return false;
		if (image == null) {
			if (other.image != null)
				return false;
		} else if (!image.equals(other.image))
			return false;
		if (Double.doubleToLongBits(price) != Double.doubleToLongBits(other.price))
			return false;
		if (productId != other.productId)
			return false;
		if (quantity != other.quantity)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Items [ProductName=" + ProductName + ", productId=" + productId + ", price=" + price + ", quantity="
				+ quantity + ", image=" + image + "]";
	}
	
	

}
