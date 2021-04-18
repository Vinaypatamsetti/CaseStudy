package vinay.service;

import java.util.List;
import java.util.Optional;



import vinay.model.Product;



public interface ProductService {

	void addProducts(Product product);

	List<Product> getAllProducts();

	Optional<Product> getProductById(int id);

	Optional<Product> getProductByName(String name);

	List<Product> getProductByType(String type);

	List<Product> getProductByCategory(String category);

	Product updateProduct(Product product);

	void deleteProductById(int id);



	

}
