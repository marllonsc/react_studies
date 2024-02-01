package com.luv2code.springbootlibrary.service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.luv2code.springbootlibrary.dao.BookRepository;
import com.luv2code.springbootlibrary.dao.CheckoutRepository;
import com.luv2code.springbootlibrary.entity.Book;
import com.luv2code.springbootlibrary.entity.Checkout;
import com.luv2code.springbootlibrary.requestmodels.ShelfCurrentLoansResponse;
import com.nimbusds.oauth2.sdk.util.date.SimpleDate;

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
	
	
	public Boolean checkoutBookByUser(String userEmail, Long bookId) {
		Checkout validateCheckout = checkoutRepository.findByUserEmailAndBookId(userEmail, bookId);
		
		if(validateCheckout != null) {
			return true;
		}else {
			return false;
		}
	}
	
	public int currentLoansCount(String userEmail) {
		return checkoutRepository.findBooksByUserEmail(userEmail).size();
	}

	public List<ShelfCurrentLoansResponse> currentLoans(String userEmail) throws Exception {
		
		List<ShelfCurrentLoansResponse> shelfCurrentLoansResponses = new ArrayList<>();

		List<Checkout> checkoutList = checkoutRepository.findBooksByUserEmail(userEmail);
		List<Long> bookidList = new ArrayList<>();

		for (Checkout i : checkoutList) {
			bookidList.add(i.getBookId());
		}

		List<Book> books = bookRepository.findBooksByBooksId(bookidList);

		SimpleDateFormat sdf = new SimpleDateFormat("yyy-MM-dd");

		for (Book book : books) {
			Optional<Checkout> checkout = checkoutList.stream().filter(x -> x.getBookId() == book.getId()).findFirst();

			if(checkout.isPresent()){
				Date d1 = sdf.parse(checkout.get().getReturnDate());
				Date d2 = sdf.parse(LocalDate.now().toString());

				TimeUnit time = TimeUnit.DAYS;

				long difference_In_Tine = time.convert(d1.getTime() - d2.getTime(), TimeUnit.MILLISECONDS);

				shelfCurrentLoansResponses.add(new ShelfCurrentLoansResponse(book, (int) difference_In_Tine));
			}
		}

		return shelfCurrentLoansResponses;

	}
}
