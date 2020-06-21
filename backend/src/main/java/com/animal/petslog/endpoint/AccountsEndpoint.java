package com.animal.petslog.endpoint;

import com.animal.petslog.account.Account;
import com.animal.petslog.account.AccountService;
import com.animal.petslog.account.CreateAccountRequest;
import com.animal.petslog.account.UpdateAccountRequest;
import com.animal.petslog.authentication.JwtParser;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RequestMapping("/accounts")
public class AccountsEndpoint {

    private final AccountService accountService;
    private final JwtParser jwtParser;

    public AccountsEndpoint(AccountService accountService, JwtParser jwtParser) {
        this.accountService = accountService;
        this.jwtParser = jwtParser;
    }

    @PostMapping
    public ResponseEntity<Void> create(@RequestBody CreateAccountRequest createAccountRequest) {
        accountService.setUpNewAccount(createAccountRequest);
        if ()
        return ResponseEntity.ok(null);
    }

    @GetMapping
    public ResponseEntity<Account> getAccountDetail(@RequestParam("email") String email) {
        Optional<Account> account = accountService.getAccountDetail(email);
        return ResponseEntity.ok(account.get());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Account> updateAccount(@PathVariable("id") Integer id,
                                                 @RequestHeader("accessToken") String accessToken,
                                                 @RequestBody UpdateAccountRequest updateAccountRequest) {
       String email = jwtParser.parseJwt(accessToken);
        Optional<Account> accountDetail = accountService.getAccountDetail(email);
        if( accountDetail.get().getId() == id ) {
            return ResponseEntity.ok(accountService.updateAccount(updateAccountRequest,id));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAccount(@PathVariable("id") Integer id,
                                                 @RequestHeader("accessToken") String accessToken) {
        String email = jwtParser.parseJwt(accessToken);
        Optional<Account> accountDetail = accountService.getAccountDetail(email);
        if( accountDetail.get().getId() == id ) {
            accountService.deleteAccount(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

}
