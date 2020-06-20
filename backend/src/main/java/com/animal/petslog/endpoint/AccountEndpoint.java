package com.animal.petslog.endpoint;

import com.animal.petslog.account.Account;
import com.animal.petslog.account.AccountService;
import com.animal.petslog.authentication.JwtParser;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@RequestMapping("/account")
public class AccountEndpoint {
    private final JwtParser jwtParser;
    private final AccountService accountService;

    public AccountEndpoint(JwtParser jwtParser, AccountService accountService) {
        this.jwtParser = jwtParser;
        this.accountService = accountService;
    }

    @GetMapping("/me")
    public ResponseEntity<Account> getAuthenticatedAccount (@RequestHeader("accessToken")String accessToken) {
        String email = jwtParser.parseJwt(accessToken);
        Optional<Account> accountDetail = accountService.getAccountDetail(email);
        if(accountDetail.isPresent()) {
            return ResponseEntity.ok(accountDetail.get());
        }
        else {
            return ResponseEntity.badRequest().build();
        }


    }
}
