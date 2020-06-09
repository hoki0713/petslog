package com.animal.petslog.dogcrawling;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

import static java.util.Objects.requireNonNull;

@RequestMapping(value ="/dogs", produces = MediaType.APPLICATION_JSON_VALUE)
public class DogsEndpoint {
    private final DogService dogService;

    public DogsEndpoint(DogService dogService) {
        this.dogService = requireNonNull(dogService);
    }

    @GetMapping("/breedslist")
    public ResponseEntity<List<Dog>> getBreedsList() {
        List<Dog> dogs = dogService.getDogBreedsList();
        return ResponseEntity.ok(dogs);
    }
}
