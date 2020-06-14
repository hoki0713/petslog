package com.animal.petslog.dogcrawling;

import com.animal.petslog.repository.DogBreedRepository;

import java.sql.SQLException;
import java.util.List;

public class DogService {
    private final DogBreedRepository dogBreedRepository;

    public DogService(DogBreedRepository dogBreedRepository) {
        this.dogBreedRepository = dogBreedRepository;
    }

    public List<Dog> getDogBreedsList() {
        try {
            return dogBreedRepository.get();
        } catch (SQLException throwables) {
            throw new RuntimeException(throwables);
        }
    }
}
