package com.animal.petslog.endpoint;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/accounts")
public class AccountsEndpoint {
    @PostMapping
    public ResponseEntity<Void> create(@RequestBody CreateAccountRequest createAccountRequest) {
        System.out.println(createAccountRequest.toString());
        return ResponseEntity.ok(null);
    }
}
