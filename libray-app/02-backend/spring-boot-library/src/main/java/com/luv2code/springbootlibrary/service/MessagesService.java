package com.luv2code.springbootlibrary.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.luv2code.springbootlibrary.dao.MessagesRepository;
import com.luv2code.springbootlibrary.entity.Message;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class MessagesService {

    private MessagesRepository messagesRepository;

    @Autowired
    public MessagesService(MessagesRepository messagesRepository) {
        this.messagesRepository = messagesRepository;
    }

    public void postMessage(Message messageRequest, String userEmail) {
        Message message = new Message(messageRequest.getTitle(), messageRequest.getQuestion());

        message.setUserEmail(userEmail);
        messagesRepository.save(message);
    }
}
