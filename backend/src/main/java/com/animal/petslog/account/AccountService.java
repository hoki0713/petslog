package com.animal.petslog.account;

import com.animal.petslog.repository.AccountRepository;

public class AccountService {
    private final SaltFactory saltFactory;
    private final PasswordHasher passwordHasher;
    private final AccountRepository accountRepository;

    public AccountService(SaltFactory saltFactory, PasswordHasher passwordHasher, AccountRepository accountRepository) {
        this.saltFactory = saltFactory;
        this.passwordHasher = passwordHasher;
        this.accountRepository = accountRepository;
    }

    public Account setUpNewAccount(CreateAccountRequest createAccountRequest) {
        String salt = saltFactory.createSalt();
        String hashedPassword = passwordHasher.hashPassword(createAccountRequest.getPassword(), salt);
        Account account = new Account(createAccountRequest.getEmail(), hashedPassword, salt, createAccountRequest.getName(), createAccountRequest.getType());
        accountRepository.insert(account);
        return account;
    }


}
