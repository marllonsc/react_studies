package com.luv2code.springbootlibrary.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.authority.mapping.SimpleAuthorityMapper;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.accept.ContentNegotiationStrategy;
import org.springframework.web.accept.HeaderContentNegotiationStrategy;

import com.okta.spring.boot.oauth.Okta;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
	

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		
		//Disable Cross site Request forgery
		http.csrf().disable();
		
		// Protect endpoints at /api/<type>/secure
		http.authorizeRequests(configurer -> configurer.requestMatchers("/api/books/secure/**").authenticated())
		.oauth2ResourceServer().jwt();
		
		//add CORS filters
		http.cors();
		
		//add content negotiation strategy
		http.setSharedObject(ContentNegotiationStrategy.class, new HeaderContentNegotiationStrategy());
		
		
		//	Force a now-empty response body for 401's to meake the response friendly
		Okta.configureResourceServer401ResponseBody(http);
		
		return http.build();
	}



}
