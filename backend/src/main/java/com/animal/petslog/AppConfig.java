package com.animal.petslog;

import com.animal.petslog.account.AccountService;
import com.animal.petslog.account.PasswordHasher;
import com.animal.petslog.account.SaltFactory;
import com.animal.petslog.authentication.AuthenticationService;
import com.animal.petslog.authentication.JwtParser;
import com.animal.petslog.authentication.JwtTokenFactory;
import com.animal.petslog.catcrawling.CatService;
import com.animal.petslog.endpoint.*;
import com.animal.petslog.dogcrawling.DogService;
import com.animal.petslog.repository.AccountRepository;
import com.animal.petslog.repository.CatBreedRepository;
import com.animal.petslog.repository.DogBreedRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
    public AccountEndpoint accountEndpoint(JwtParser jwtParser, AccountService accountService) {
        return new AccountEndpoint(jwtParser, accountService);
    }

    @Bean
    public JwtParser jwtParser() {
        return new JwtParser(System.getenv("secretKey"));
    }

    @Bean
    public JwtTokenFactory jwtTokenFactory() {
        return new JwtTokenFactory(System.getenv("secretKey"));
    }

    @Bean
    public AccountsEndpoint accountsEndpoint(AccountService accountService, JwtParser jwtParser) {
        return new AccountsEndpoint(accountService, jwtParser);
    }

    @Bean
    public AccountService accountService(SaltFactory saltFactory, PasswordHasher passwordHasher, AccountRepository accountRepository) {
        return new AccountService(saltFactory, passwordHasher, accountRepository);
    }

    @Bean
    public SaltFactory saltFactory() {
        return new SaltFactory();
    }

    @Bean
    public PasswordHasher passwordHasher() {
        return new PasswordHasher();
    }

    @Bean
    public AccountRepository accountRepository(ConnectionFactory connectionFactory) {
        return new AccountRepository(connectionFactory.createConnection());
    }

    @Bean
    public ConnectionFactory connectionFactory() {
        return new ConnectionFactory();
    }

    @Bean
    public AuthenticationService authenticationService(AccountRepository accountRepository, PasswordHasher passwordHasher, JwtTokenFactory jwtTokenFactory) {
        return new AuthenticationService(accountRepository, passwordHasher, jwtTokenFactory);
    }

    @Bean
    public AuthenticationEndpoint authenticationEndpoint(AuthenticationService authenticationService) {
        return new AuthenticationEndpoint(authenticationService);
    }

    @Bean
    public CatBreedRepository catBreedRepository(ConnectionFactory connectionFactory) {
        return new CatBreedRepository(connectionFactory.createConnection());
    }

    @Bean
    public CatsEndpoint catsEndpoint(CatService catService) {
        return new CatsEndpoint(catService);
    }

    @Bean
    public CatService catService(CatBreedRepository catBreedRepository) {
        return new CatService(catBreedRepository);
    }

    @Bean
    public DogBreedRepository dogBreedRepository(ConnectionFactory connectionFactory) {
        return new DogBreedRepository(connectionFactory.createConnection());
    }

    @Bean
    public DogsEndpoint dogsEndpoint(DogService dogService) {
        return new DogsEndpoint(dogService);
    }

    @Bean
    public DogService dogService(DogBreedRepository dogBreedRepository) {
        return new DogService(dogBreedRepository);
    }
}
