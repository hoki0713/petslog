package com.animal.petslog;

import com.animal.petslog.catcrawling.CatBreedsCrawler;
import com.animal.petslog.catcrawling.CatService;
import com.animal.petslog.catcrawling.CatsEndpoint;
import com.animal.petslog.dogcrawling.Dog;
import com.animal.petslog.dogcrawling.DogBreedsCrawler;
import com.animal.petslog.dogcrawling.DogService;
import com.animal.petslog.dogcrawling.DogsEndpoint;
import com.animal.petslog.endpoint.AccountsEndpoint;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    @Bean
    public AccountsEndpoint accountsEndpoint() {
        return new AccountsEndpoint();
    }

    @Bean
    public CatBreedsCrawler catBreedsCrawler( ) {
        return new CatBreedsCrawler();
    }

    @Bean
    public CatsEndpoint catsEndpoint(CatService catService) {
        return new CatsEndpoint(catService);
    }

    @Bean
    public CatService catService(CatBreedsCrawler catBreedsCrawler) {
        return new CatService(catBreedsCrawler);
    }

    @Bean
    public DogBreedsCrawler dogBreedsCrawler() {
        return new DogBreedsCrawler();
    }

    @Bean
    public DogsEndpoint dogsEndpoint(DogService dogService) {
        return new DogsEndpoint(dogService);
    }

    @Bean
    public DogService dogService(DogBreedsCrawler dogBreedsCrawler) {
        return new DogService(dogBreedsCrawler);
    }
}
