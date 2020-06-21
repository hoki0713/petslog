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

    public void update(Account updatedAccount) {
        try {
            PreparedStatement preparedStatement = connection.prepareStatement("UPDATE account SET name = ?, type = ? WHERE id = ?");
            preparedStatement.setString(1,updatedAccount.getName());
            preparedStatement.setString(2,updatedAccount.getType());
            preparedStatement.setInt(3, updatedAccount.getId());
            preparedStatement.execute();
            connection.commit();
        } catch (SQLException throwables) {
            throw new RuntimeException(throwables);
        }

    }

    public void delete(Integer id) {
        try {
            PreparedStatement preparedStatement = connection.prepareStatement("DELETE FROM account WHERE id = ?");
            preparedStatement.setInt(1, id);
            preparedStatement.execute();
            connection.commit();
        } catch (SQLException throwables) {
            throw new RuntimeException(throwables);
        }
    }

    public Optional<Account> getById(int id) {
        try {
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM account WHERE id = ?");
            preparedStatement.setInt(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            return getAccount(resultSet);
        } catch (SQLException throwables) {
            throw new RuntimeException(throwables);
        }
    }
    public Optional<Account> getByEmail(String email) {
        try {
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM account WHERE email = ?");
            preparedStatement.setString(1,email);
            ResultSet resultSet = preparedStatement.executeQuery();
            return getAccount(resultSet);
        } catch (SQLException throwables) {
            throw new RuntimeException(throwables);
        }
    }

    private Optional<Account> getAccount(ResultSet resultSet) throws SQLException {
        if(resultSet.next()) {
            return Optional.of(new Account(
                    resultSet.getInt(1),
                    resultSet.getString(2),
                    resultSet.getString(3),
                    resultSet.getString(4),
                    resultSet.getString(5),
                    resultSet.getString(6)));
        } else {
            return Optional.empty();
        }
    }


}
