package com.luv2code.springbootlibrary.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luv2code.springbootlibrary.entity.Checkout;

public interface CheckoutRepository extends JpaRepository<Checkout, Long> {
	
	Checkout findByUserEmailAndBookId(String userEmail, Long bookId);

}
