package com.animal.petslog.dogcrawling;

import com.animal.petslog.ConnectionFactory;
import com.animal.petslog.repository.DogBreedRepository;

import java.sql.SQLException;
import java.util.List;

public class DogMain {
    public static void main(String[] args) throws SQLException {
        DogBreedRepository dogBreedRepository = new DogBreedRepository(new ConnectionFactory().createConnection());
        DogBreedsCrawler dogBreedsCrawler = new DogBreedsCrawler();
        List<Dog> dogs = dogBreedsCrawler.crawlBreedsListDogs();
        dogBreedRepository.insert(dogs);

    }
}
