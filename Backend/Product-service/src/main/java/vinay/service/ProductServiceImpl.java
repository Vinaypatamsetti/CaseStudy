package vinay.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vinay.exception.InputException;
import vinay.exception.ResourceNotFoundException;
import vinay.model.Product;

import vinay.repository.ProductRepository;

@Service
public class ProductServiceImpl  implements ProductService{
	
	@Autowired
	private ProductRepository pr;

	@Override
	public void addProducts(Product product) {
		if(pr.findById(product.getProductId()).isPresent()==true) {
			throw new InputException("Product already exists");
		}
		
	  pr.save(product);
		
	}

	@Override
	public List<Product> getAllProducts() {
       		
         if(pr.findAll().size()==0) {
        	 throw new ResourceNotFoundException("No products are present");
         }
		return pr.findAll() ;
	}

	@Override
	public Optional<Product> getProductById(int id) {
		
		return Optional.ofNullable(pr.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found with id :" + id)));
	}

	@Override
	public Optional<Product> getProductByName(String name) {
		
		return Optional.ofNullable(pr.findByProductName(name)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found with name:" + name)));
	}

	@Override
	public List<Product> getProductByType(String type) {
		
			if(pr.findByProductType(type).size()==0) {
			throw new ResourceNotFoundException("No products are found with type:"+type);
		}
		return pr.findByProductType(type);
				
	}

	@Override
	public List<Product> getProductByCategory(String category) {
		
		if(pr.findByCategory(category).size()==0) {
			throw new ResourceNotFoundException("No products are found with type:"+category);
		}
		return pr.findByCategory(category);
	}

	@Override
	public Product updateProduct(Product product) {
		
		Optional.ofNullable(pr.findById(product.getProductId())
				.orElseThrow(() -> new ResourceNotFoundException("Product not found with id :" + product.getProductId())));
	      
		return pr.save(product);
	}

	@Override
	public void deleteProductById(int id) {
		
		Optional.ofNullable(pr.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found with id :" + id)));
		pr.deleteById(id);
		
	}



	

}
