package com.animal.petslog.dogcrawling;

import java.util.ArrayList;
import java.util.List;

public class DogService {
    private final DogBreedsCrawler dogBreedsCrawler;
    private List<Dog> dogs;

    public DogService(DogBreedsCrawler dogBreedsCrawler) {
        this.dogBreedsCrawler = dogBreedsCrawler;
        this.dogs = new ArrayList<>();
    }

    public List<Dog> getDogBreedsList() {
        if (dogs.isEmpty()) {
            dogs = dogBreedsCrawler.crawlBreedsListDogs();
        }
        return dogs;
    }
}
