package com.animal.petslog.endpoint;

import com.animal.petslog.account.Account;
import com.animal.petslog.authentication.AccessToken;
import com.animal.petslog.authentication.AuthenticationService;
import com.animal.petslog.authentication.LoginRequest;
import com.fasterxml.jackson.annotation.JsonProperty;
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
    public ResponseEntity<AccessToken> login(@RequestBody LoginRequest loginRequest) {
        Optional<AccessToken> accessToken = authenticationService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
        if (accessToken.isPresent()) {
            return ResponseEntity.ok(accessToken.get());
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

}
