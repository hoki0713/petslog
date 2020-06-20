package com.animal.petslog.authentication;

import com.animal.petslog.account.Account;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

public class JwtTokenFactory {
    private final String key;

    public JwtTokenFactory(String key) {
        this.key = key;
    }

    public String createJwtToken(Account account) {
        return Jwts.builder()
                .setId(account.getEmail())
                .setSubject(account.getEmail())
                .setExpiration(new Date(System.currentTimeMillis()+3600*1000))
                .signWith(SignatureAlgorithm.HS256, key)
                .compact();
    }
}
