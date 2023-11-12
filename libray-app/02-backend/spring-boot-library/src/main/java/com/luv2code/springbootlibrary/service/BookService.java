package com.luv2code.springbootlibrary.service;

import java.time.LocalDate;
import java.util.Optional;

import javax.swing.tree.ExpandVetoException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.luv2code.springbootlibrary.dao.BookRepository;
import com.luv2code.springbootlibrary.dao.CheckoutRepository;
import com.luv2code.springbootlibrary.entity.Book;
import com.luv2code.springbootlibrary.entity.Checkout;

@Service
@Transactional
public class BookService {

	private BookRepository bookRepository;
	
	private CheckoutRepository checkoutRepository;
	
	public BookService(BookRepository bookRepository, CheckoutRepository checkoutRepository) {
		this.bookRepository = bookRepository;
		this.checkoutRepository = checkoutRepository;
	}
	
	public Book checkoutBook(String userEmail, Long bookid) throws Exception {
		Optional<Book> book = bookRepository.findById(bookid);
		
		Checkout validateCheckout =  checkoutRepository.findByUserEmailAndBookId(userEmail, bookid);
		 
		if(!book.isPresent() || validateCheckout != null || book.get().getCopiesAvailable() <= 0) {
			throw new Exception("Book does't exist or already checked out by user");
		}
		
		book.get().setCopiesAvailable(book.get().getCopiesAvailable() - 1);
		
		bookRepository.save(book.get());
		
		Checkout checkout = new Checkout(userEmail, LocalDate.now().toString() ,LocalDate.now().plusDays(7).toString(), book.get().getId());
		
		
		checkoutRepository.save(checkout);
		
		return book.get();
		
	}
}