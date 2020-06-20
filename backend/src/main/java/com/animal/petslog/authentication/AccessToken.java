package com.animal.petslog.authentication;

public class AccessToken {
    private final String jwt; //json web token

    public AccessToken(String jwt) {
        this.jwt = jwt;
    }

    public String getJwt() {
        return jwt;
    }

}
