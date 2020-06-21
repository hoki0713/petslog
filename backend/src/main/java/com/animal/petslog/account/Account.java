package com.animal.petslog.account;

public class Account {
    private int id;
    private String email, hashedPassword, salt, name, type;

    public Account(int id, String email, String hashedPassword, String salt, String name, String type) {
        this.id = id;
        this.email = email;
        this.hashedPassword = hashedPassword;
        this.salt = salt;
        this.name = name;
        this.type = type;
    }

    public int getId() {
        return id;
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
