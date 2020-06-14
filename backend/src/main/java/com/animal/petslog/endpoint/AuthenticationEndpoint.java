package com.animal.petslog.endpoint;

import com.animal.petslog.account.Account;
import com.animal.petslog.authentication.AuthenticationService;
import com.animal.petslog.authentication.LoginRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@RequestMapping("/authentication")
public class AuthenticationEndpoint {

    private final AuthenticationService authenticationService;

    public AuthenticationEndpoint(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping
    public ResponseEntity<Account> login(@RequestBody LoginRequest loginRequest) {
        Optional<Account> account = authenticationService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
        if (account.isPresent()) {
            return ResponseEntity.ok(account.get());
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

}
