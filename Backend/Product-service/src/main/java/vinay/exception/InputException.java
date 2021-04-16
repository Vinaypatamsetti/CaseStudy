package vinay.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;



@ResponseStatus(value = HttpStatus.CONFLICT)
public class InputException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public InputException(String message) {
		super(message);
	}
}