package vinay.resources;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import vinay.model.Product;


import vinay.service.ProductService;
import vinay.service.SequenceGeneratorService;

@RestController
@RequestMapping("/products")
public class ProductController {
	
	@Autowired
	private ProductService ps;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	
	//Post method to add product 
	@PostMapping("/addProduct")
	public void addProducts(@Valid @RequestBody Product product){
		product.setProductId(sequenceGeneratorService.generateSequence(Product.SEQUENCE_NAME));
		ps.addProducts(product);
	}
	
	//get method to get all products 
	@GetMapping("/getAllProducts")
	public ResponseEntity<List<Product>> getAllProducts(){
		return new ResponseEntity<List<Product>>(ps.getAllProducts(),HttpStatus.OK);
	}
	
	//get method to get particular product by id
	@GetMapping("/getProductById/{Id}")
	public ResponseEntity<Optional<Product>> getProductById(@PathVariable("Id") int id){
		return new ResponseEntity<Optional<Product>>(ps.getProductById(id),HttpStatus.OK);
	}
     
	//get method to get particular product by product name
	@GetMapping("/getProductByName/{Name}")
	public ResponseEntity<Optional<Product>> getProductByName(@PathVariable("Name") String name){
		return new ResponseEntity<Optional<Product>>(ps.getProductByName(name),HttpStatus.OK);
	}
	
	//get method to get particular product by product type
	@GetMapping("/getProductByType/{Type}")
	public ResponseEntity<List<Product>> getProductByType(@PathVariable("Type") String type){
		return new ResponseEntity<List<Product>>(ps.getProductByType(type),HttpStatus.OK);
	}
	
	//get method to get particular product by category
	@GetMapping("/getProductsByCategory/{Category}")
	public ResponseEntity<List<Product>> getProductByCategory(@PathVariable("Category") String category){
		return new ResponseEntity<List<Product>>(ps.getProductByCategory(category),HttpStatus.OK);
	}
	
	//Put method to update product
	@PutMapping("/updateProduct")
	public ResponseEntity<Product> updateProduct(@RequestBody Product product){
		return new ResponseEntity<Product>(ps.updateProduct(product),HttpStatus.OK);
	} 
	
	//delete method to delete particular method with product id
	@DeleteMapping("/deleteProductById/{Id}")
	public void deleteProductById(@PathVariable("Id" )int id) {
		ps.deleteProductById(id);
	}

}
