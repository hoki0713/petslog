package com.animal.petslog.authentication;

import io.jsonwebtoken.*;

public class JwtParser {
    private final String key;

    public JwtParser(String key) {
        this.key = key;
    }

    public String parseJwt(String jwt) {
        Jws<Claims> claimsJws = Jwts.parser().setSigningKey(key).parseClaimsJws(jwt);
        return claimsJws.getBody().getSubject();
    }

}
