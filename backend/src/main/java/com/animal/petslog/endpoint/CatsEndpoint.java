package com.animal.petslog.endpoint;

import com.animal.petslog.catcrawling.Cat;
import com.animal.petslog.catcrawling.CatService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

import static java.util.Objects.requireNonNull;

@RequestMapping(value ="/cats", produces = MediaType.APPLICATION_JSON_VALUE)
public class CatsEndpoint {

    private final CatService catService;

    public CatsEndpoint(CatService catService) {
        this.catService = requireNonNull(catService);
    }

    @GetMapping("/breedslist")
    public ResponseEntity<List<Cat>> getBreedsList() {
        List<Cat> cats = catService.getCatBreedsList();
        return ResponseEntity.ok(cats);
    }
}
