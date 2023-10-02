package com.luv2code.springbootlibrary.config;

import com.luv2code.springbootlibrary.entity.Book;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;


@Configuration
public class MyDataRestConfig  implements RepositoryRestConfigurer {

    private String theAllowerdOrigins = "http://localhost:3000";

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors){

        HttpMethod[] theUnsupportedActions = {
                HttpMethod.DELETE,
                HttpMethod.PUT,
                HttpMethod.PATCH,
                HttpMethod.POST
        };

        config.exposeIdsFor(Book.class);

        disableHttpMethods(Book.class, config, theUnsupportedActions);

        /* Config Cors Mapping*/


        cors.addMapping(config.getBasePath()+ "/**")
                .allowedOrigins(theAllowerdOrigins);

    }

    private void disableHttpMethods(Class<Book> bookClass, RepositoryRestConfiguration config, HttpMethod[] theUnsupportedActions) {

        config.getExposureConfiguration().forDomainType(bookClass)
                .withAssociationExposure((metdata,httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata,httpMethods) -> httpMethods.disable(theUnsupportedActions));
    }

}
