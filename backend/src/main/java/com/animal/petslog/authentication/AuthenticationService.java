package com.animal.petslog.authentication;

import com.animal.petslog.account.Account;
import com.animal.petslog.account.PasswordHasher;
import com.animal.petslog.repository.AccountRepository;

import java.util.Optional;

public class AuthenticationService {
    private final AccountRepository accountRepository;
    private final PasswordHasher passwordHasher;
    private final JwtTokenFactory jwtTokenFactory;

    public AuthenticationService(AccountRepository accountRepository, PasswordHasher passwordHasher, JwtTokenFactory jwtTokenFactory) {
        this.accountRepository = accountRepository;
        this.passwordHasher = passwordHasher;
        this.jwtTokenFactory = jwtTokenFactory;
    }

    public Optional<AccessToken> authenticate(String email, String password) {
        Optional<Account> byEmail = accountRepository.getByEmail(email);
        if(!byEmail.isPresent()) {
            return Optional.empty();
        } else {
            Account account = byEmail.get();
            String salt = account.getSalt();
            if(passwordHasher.hashPassword(password, salt)
                    .equals(account.getHashedPassword())) {
                return Optional.of(new AccessToken(jwtTokenFactory.createJwtToken(account)));
            } else {
                return Optional.empty();
            }
        }
    }
}
