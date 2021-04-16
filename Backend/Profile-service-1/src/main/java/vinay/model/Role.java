package vinay.model;

import org.springframework.stereotype.Service;

@Service
public interface Role  {
	
	public static final String Customer = "customer";
	public static final String Merchant = "merchant";
	public static final String DeliveryAgent = "deliveryAgent";

}
