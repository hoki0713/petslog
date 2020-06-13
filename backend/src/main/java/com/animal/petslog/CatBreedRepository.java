package com.animal.petslog;

import com.animal.petslog.catcrawling.Cat;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class CatBreedRepository {
    Connection connection;
    public CatBreedRepository(Connection connection) {
        this.connection = connection;
    }

    public void insert(List<Cat> cats) throws SQLException {
        PreparedStatement preparedStatement = this.connection.prepareStatement("INSERT INTO catbreed (name, min_life, max_life, origin, imgurl, temperament) VALUES(?,?,?,?,?,?)");
        for (Cat cat: cats) {
            preparedStatement.setString(1, cat.getBreed());
            Pattern pattern = Pattern.compile("Lifespan: ([0-9]{1,2})-([0-9]{1,2}) years");
            Matcher matcher = pattern.matcher(cat.getLifespan());
            if(!matcher.matches()) {
                throw new RuntimeException("not match");
            }
            preparedStatement.setInt(2, Integer.parseInt(matcher.group(1)));
            preparedStatement.setInt(3, Integer.parseInt(matcher.group(2)));
            Matcher originMatcher = Pattern.compile("Origin: ([A-z (),]+)").matcher(cat.getOrigin());
            if(!originMatcher.matches()) {
                throw new RuntimeException("originMatcher is not matched"+cat.getOrigin());
            }
            preparedStatement.setString(4, originMatcher.group(1));
            preparedStatement.setString(5,cat.getImgUrl());
            preparedStatement.setString(6,cat.getTemperament());
            preparedStatement.addBatch();
        }
        preparedStatement.executeBatch();
        connection.commit();
    }

    public List<Cat> get() throws SQLException {
        List<Cat> result = new ArrayList<>();
        Statement statement = connection.createStatement();
        ResultSet resultSet = statement.executeQuery("SELECT * FROM catbreed");
        while(resultSet.next()) {
            result.add(Cat.builder()
                    .breed(resultSet.getString(2))
                    .lifespan(String.format("%d~%d",resultSet.getInt(3),resultSet.getInt(4)))
                    .origin(resultSet.getString(5))
                    .imgUrl(resultSet.getString(6))
                    .temperament(resultSet.getString(7))
                    .build());
        }
        return result;
    }
}
