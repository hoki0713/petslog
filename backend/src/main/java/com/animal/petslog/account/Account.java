package com.animal.petslog.account;

public class Account {
    private String email, hashedPassword, salt, name, type;

    public Account(String email, String hashedPassword, String salt, String name, String type) {
        this.email = email;
        this.hashedPassword = hashedPassword;
        this.salt = salt;
        this.name = name;
        this.type = type;
    }

    public String getEmail() {
        return email;
    }

    public String getHashedPassword() {
        return hashedPassword;
    }

    public String getSalt() {
        return salt;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }
}
