package com.animal.petslog.catcrawling;

import java.util.ArrayList;
import java.util.List;

public class CatService {
    private final CatBreedsCrawler catBreedsCrawler;
    private List<Cat> cats;


    public CatService(CatBreedsCrawler catBreedsCrawler) {
        this.catBreedsCrawler = catBreedsCrawler;
        this.cats = new ArrayList<>();
    }

    public List<Cat> getCatBreedsList() {
        if (cats.isEmpty()) {
            cats = catBreedsCrawler.crawlBreedsListCats();
        }
        return cats;
    }
}
