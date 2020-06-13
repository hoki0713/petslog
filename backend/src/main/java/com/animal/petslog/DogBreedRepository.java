package com.animal.petslog;

import com.animal.petslog.dogcrawling.Dog;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class DogBreedRepository {
    Connection connection;

    public DogBreedRepository(Connection connection) {
        this.connection = connection;
    }

    public void insert(List<Dog> dogs) throws SQLException {
        PreparedStatement preparedStatement = this.connection.prepareStatement("INSERT INTO dogbreed (name, min_life, max_life, imgurl, temperament, intelligence) VALUES (?,?,?,?,?,?)");
        for (Dog dog: dogs) {
            preparedStatement.setString(1, dog.getBreed());
            Pattern pattern = Pattern.compile("Lifespan: ([0-9]{1,2})-([0-9]{1,2}) years");
            Matcher matcher = pattern.matcher(dog.getLifespan());
            if(matcher.matches()) {
                preparedStatement.setInt(2, Integer.parseInt(matcher.group(1)));
                preparedStatement.setInt(3,Integer.parseInt(matcher.group(2)));
            } else {
                preparedStatement.setNull(2, Types.INTEGER);
                preparedStatement.setNull(3, Types.INTEGER);
            }
            preparedStatement.setString(4, dog.getImgUrl());
            preparedStatement.setString(5, dog.getTemperament());
            preparedStatement.setString(6, dog.getIntelligence());
            preparedStatement.addBatch();
        }
        preparedStatement.executeBatch();
        connection.commit();
    }

    public List<Dog> get() throws SQLException {
        List<Dog> result = new ArrayList<>();
        Statement statement = connection.createStatement();
        ResultSet resultSet = statement.executeQuery("SELECT * FROM dogbreed");
        while(resultSet.next()){
            result.add(Dog.builder()
                    .breed(resultSet.getString(2))
                    .lifespan(String.format("%d~%d",resultSet.getInt(3),resultSet.getInt(4)))
                    .imgUrl(resultSet.getString(5))
                    .temperament(resultSet.getString(6))
                    .intelligence(resultSet.getString(7))
                    .build());
        }
        return result;
    }
}
