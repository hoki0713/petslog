package com.animal.petslog.account;

import java.security.SecureRandom;
import java.util.Base64;

public class SaltFactory {
    public String createSalt() {
        SecureRandom random = new SecureRandom();
        byte[] salt = new byte[16];
        random.nextBytes(salt);
        return Base64.getEncoder().encodeToString(salt);
    }
}
