package com.animal.petslog.catcrawling;

import com.animal.petslog.CatBreedRepository;

import java.sql.SQLException;
import java.util.List;

public class CatService {
    private final CatBreedRepository catBreedRepository;

    public CatService(CatBreedRepository catBreedRepository) {
        this.catBreedRepository = catBreedRepository;
    }

    public List<Cat> getCatBreedsList() {
        try {
            return catBreedRepository.get();
        } catch (SQLException throwables) {
            throw new RuntimeException(throwables);
        }
    }
}
