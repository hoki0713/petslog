package com.animal.petslog.endpoint;

import com.animal.petslog.account.Account;
import com.animal.petslog.account.AccountService;
import com.animal.petslog.account.CreateAccountRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RequestMapping("/accounts")
public class AccountsEndpoint {

    private final AccountService accountService;

    public AccountsEndpoint(AccountService accountService) {
        this.accountService = accountService;
    }

    @PostMapping
    public ResponseEntity<Void> create(@RequestBody CreateAccountRequest createAccountRequest) {
        accountService.setUpNewAccount(createAccountRequest);
        return ResponseEntity.ok(null);
    }

    @GetMapping
    public ResponseEntity<Account> getAccountDetail(@RequestParam("email") String email) {
        Optional<Account> account = accountService.getAccountDetail(email);
        return ResponseEntity.ok(account.get());
    }
}
