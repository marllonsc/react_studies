package com.luv2code.springbootlibrary.service;

import java.time.LocalDate;
import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.luv2code.springbootlibrary.dao.BookRepository;
import com.luv2code.springbootlibrary.dao.ReviewRepository;
import com.luv2code.springbootlibrary.entity.Review;
import com.luv2code.springbootlibrary.requestmodels.ReviewRequest;

@Service
@Transactional
public class ReviewService {

	private ReviewRepository reviewRepository;

	@Autowired
	public ReviewService(ReviewRepository reviewRepository) {
		super();
		this.reviewRepository = reviewRepository;
	}

	public void postReview(String userEmail, ReviewRequest reviewRequest) throws Exception {

		Review validateReview = reviewRepository.findByUserEmailAndBookId(userEmail, reviewRequest.getBookId());

		if (validateReview != null) {
			throw new Exception("Review already created");
		}

		Review review = new Review();
		review.setBookId(reviewRequest.getBookId());
		review.setRating(reviewRequest.getRating());
		review.setUserEmail(userEmail);

		if (reviewRequest.getReviewDescription().isPresent()) {
			review.setReviewDescription(reviewRequest.getReviewDescription().map(Object::toString).orElse(null));
		}
		review.setDate(Date.valueOf(LocalDate.now()));
		reviewRepository.save(review);
	}

	public boolean userReviewListed(String userEmail, Long bookId) {
		Review validadeReview = reviewRepository.findByUserEmailAndBookId(userEmail, bookId);

		if (validadeReview != null) {
			return true;
		} else {
			return false;
		}
	}

}
