package com.animal.petslog.account;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.Base64;

public class PasswordHasher {
    public String hashPassword(String password, String salt) {
        SecretKeyFactory factory;
        byte[] decoded = Base64.getDecoder().decode(salt);
        byte[] hash;
        PBEKeySpec pbeKeySpec = new PBEKeySpec(password.toCharArray(), decoded, 65526, 128);
        try {
            factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
        try {
            hash = factory.generateSecret(pbeKeySpec).getEncoded();
        } catch (InvalidKeySpecException e) {
           throw new RuntimeException(e);
        }
        return Base64.getEncoder().encodeToString(hash);
    }
}
