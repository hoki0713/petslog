package com.animal.petslog.account;

import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;

class PasswordHasherTest {
    @Test
    void hashPassword() {
        PasswordHasher passwordHasher = new PasswordHasher();
        String hashedPassword = passwordHasher.hashPassword("abc", "SGVsbG8=");
        assertThat(hashedPassword, is("2km/fopEfWiVpuJYQtsqlQ=="));
    }
}