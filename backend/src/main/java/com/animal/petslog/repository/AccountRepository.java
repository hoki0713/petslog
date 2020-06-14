package com.animal.petslog.repository;

import com.animal.petslog.account.Account;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class AccountRepository {
    private final Connection connection;

    public AccountRepository(Connection connection) {
        this.connection = connection;
    }

    public void insert(Account account) {
        try {
            PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO account (email, hashed_password, salt, name, type) VALUES (?,?,?,?,?)");
            preparedStatement.setString(1, account.getEmail());
            preparedStatement.setString(2,account.getHashedPassword());
            preparedStatement.setString(3,account.getSalt());
            preparedStatement.setString(4, account.getName());
            preparedStatement.setString(5, account.getType());
            preparedStatement.execute();
            connection.commit();
        } catch (SQLException throwables) {
            throw new RuntimeException(throwables);
        }
    }
}
