package com.animal.petslog.catcrawling;

import com.animal.petslog.CatBreedRepository;
import com.animal.petslog.ConnectionFactory;

import java.sql.SQLException;
import java.util.List;

public class CatMain {
    public static void main(String[] args) throws SQLException {
        CatBreedRepository catBreedRepository = new CatBreedRepository(new ConnectionFactory().createConnection());
        CatBreedsCrawler catBreedsCrawler = new CatBreedsCrawler();
        List<Cat> cats = catBreedsCrawler.crawlBreedsListCats();
        catBreedRepository.insert(cats);
    }

}
