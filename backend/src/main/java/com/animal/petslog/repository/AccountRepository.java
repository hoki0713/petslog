package com.animal.petslog.repository;

import com.animal.petslog.account.Account;

import java.sql.*;
import java.util.Optional;

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
    public Optional<Account> getByEmail(String email) {
        try {
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM account WHERE email = ?");
            preparedStatement.setString(1,email);
            ResultSet resultSet = preparedStatement.executeQuery();
            if(resultSet.next()) {
                return Optional.of(new Account(
                        resultSet.getString(2),
                        resultSet.getString(3),
                        resultSet.getString(4),
                        resultSet.getString(5),
                        resultSet.getString(6)));
            } else {
                return Optional.empty();
            }
        } catch (SQLException throwables) {
            throw new RuntimeException(throwables);
        }
    }
}
