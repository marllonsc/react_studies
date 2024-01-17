package com.luv2code.springbootlibrary.config;

import com.luv2code.springbootlibrary.entity.Book;
import com.luv2code.springbootlibrary.entity.Checkout;
import com.luv2code.springbootlibrary.entity.Review;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;


@Configuration
public class MyDataRestConfig  implements RepositoryRestConfigurer {

    //private String theAllowerdOrigins = "http://localhost:3000";
    private String theAllowerdOrigins = "*";

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors){

        HttpMethod[] theUnsupportedActions = {
        		HttpMethod.GET,
                HttpMethod.DELETE,
                HttpMethod.PUT,
                HttpMethod.PATCH,
                HttpMethod.POST
        };

        config.exposeIdsFor(Book.class);
        config.exposeIdsFor(Review.class);
        config.exposeIdsFor(Checkout.class);

        disableHttpMethods(Book.class, config, theUnsupportedActions);
        disableHttpMethods2(Review.class, config, theUnsupportedActions);
        disableHttpMethods3(Checkout.class, config, theUnsupportedActions);

        /* Config Cors Mapping*/


        cors.addMapping(config.getBasePath()+ "/**")
                .allowedOrigins(theAllowerdOrigins);

    }

    private void disableHttpMethods2(Class<Review> class1, RepositoryRestConfiguration config,
			HttpMethod[] theUnsupportedActions) {
    	
    	config.getExposureConfiguration().forDomainType(class1)
        .withAssociationExposure((metdata,httpMethods) -> httpMethods.disable(theUnsupportedActions))
        .withCollectionExposure((metdata,httpMethods) -> httpMethods.disable(theUnsupportedActions));
		
	}

	private void disableHttpMethods(Class<Book> bookClass, RepositoryRestConfiguration config, HttpMethod[] theUnsupportedActions) {

        config.getExposureConfiguration().forDomainType(bookClass)
                .withAssociationExposure((metdata,httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata,httpMethods) -> httpMethods.disable(theUnsupportedActions));
    }
	
	private void disableHttpMethods3(Class<Checkout> checkout, RepositoryRestConfiguration config, HttpMethod[] theUnsupportedActions) {

        config.getExposureConfiguration().forDomainType(checkout)
                .withAssociationExposure((metdata,httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata,httpMethods) -> httpMethods.disable(theUnsupportedActions));
    }

}
