package vinay.model;

import java.util.List;
import java.util.Map;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="Products")
public class Product {
	

	@Transient
    public static final String SEQUENCE_NAME = "products_sequence";
	
	@Id
	private int productId;
	private String productType;
	private String productName;
	private String category;
	private Map<Integer,Double> rating;
	private Map<Integer,String> review;
	private String image1;
	private String image2;
	private double price;
	private String description;
	private Map<String,String> specification;
	
	public String getImage1() {
		return image1;
	}




	public void setImage1(String image1) {
		this.image1 = image1;
	}




	public String getImage2() {
		return image2;
	}




	public void setImage2(String image2) {
		this.image2 = image2;
	}




	public Product(int productId, String productType, String productName, String category, Map<Integer, Double> rating,
			Map<Integer, String> review, String image1, String image2, double price, String description,
			Map<String, String> specification) {
		super();
		this.productId = productId;
		this.productType = productType;
		this.productName = productName;
		this.category = category;
		this.rating = rating;
		this.review = review;
		this.image1 = image1;
		this.image2 = image2;
		this.price = price;
		this.description = description;
		this.specification = specification;
	}

	
	
	
	public Product() {
		
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductType() {
		return productType;
	}

	public void setProductType(String productType) {
		this.productType = productType;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Map<Integer, Double> getRating() {
		return rating;
	}

	public void setRating(Map<Integer, Double> rating) {
		this.rating = rating;
	}

	public Map<Integer, String> getReview() {
		return review;
	}

	public void setReview(Map<Integer, String> review) {
		this.review = review;
	}



	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Map<String, String> getSpecification() {
		return specification;
	}

	public void setSpecification(Map<String, String> specification) {
		this.specification = specification;
	}




	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productType=" + productType + ", productName=" + productName
				+ ", category=" + category + ", rating=" + rating + ", review=" + review + ", image1=" + image1
				+ ", image2=" + image2 + ", price=" + price + ", description=" + description + ", specification="
				+ specification + "]";
	}

	
	
	
	
	

}
