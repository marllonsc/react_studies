package com.luv2code.springbootlibrary.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luv2code.springbootlibrary.entity.Message;

public interface MessagesRepository extends JpaRepository<Message, Long> {

}
