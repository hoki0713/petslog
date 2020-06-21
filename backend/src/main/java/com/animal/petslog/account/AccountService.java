package com.animal.petslog.account;

import com.animal.petslog.repository.AccountRepository;

import java.util.Optional;

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
        Account account = new Account(0, createAccountRequest.getEmail(), hashedPassword, salt, createAccountRequest.getName(), createAccountRequest.getType());
        accountRepository.insert(account);
        return account;
    }

    public Account updateAccount(UpdateAccountRequest updateAccountRequest, int id) {
        Account account = accountRepository.getById(id).orElseThrow(() -> new RuntimeException());
        Account newAccount = new Account(id, account.getEmail(), account.getHashedPassword(), account.getSalt(), updateAccountRequest.getName(), updateAccountRequest.getType());
        accountRepository.update(newAccount);
        return newAccount;
    }


    public Optional<Account> getAccountDetail(String email) {
        return accountRepository.getByEmail(email);
    }
}
