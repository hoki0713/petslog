package com.animal.petslog;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class ConnectionFactory {
    public Connection createConnection(){
        Properties connectionProps = new Properties();
        connectionProps.put("user", "root");
        connectionProps.put("password", "mariadb");

        try {
            return DriverManager.getConnection("jdbc:mariadb://localhost/petslog",connectionProps);
        } catch (SQLException throwables) {
            throw new RuntimeException(throwables);
        }
    }

}
