package com.animal.petslog;

import com.animal.petslog.endpoint.AccountsEndpoint;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    @Bean
    public AccountsEndpoint accountsEndpoint() {
        return new AccountsEndpoint();
    }
}
