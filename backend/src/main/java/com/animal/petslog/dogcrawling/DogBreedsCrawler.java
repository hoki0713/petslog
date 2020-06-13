package com.animal.petslog.dogcrawling;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class DogBreedsCrawler {
    public List<Dog> crawlBreedsListDogs() {
        List<Dog> listOfDogs = new ArrayList<>();
        for(int i = 1; i < 20; i++) {
            String url = "https://www.dogbreedslist.info/all-dog-breeds/list_1_" + i + ".html";
            Document dogBreedsDocument = getDogBreedsDocument(url);
            List<Dog> dogs = crawlDocument(dogBreedsDocument);
            listOfDogs.addAll(dogs);
        }
        return listOfDogs;
    }

    private List<Dog> crawlDocument(Document document) {
        Elements breeds = document.select("div.list>div.list-1>div.right>div.right-t>p>a");
        Elements lifespans = document.select("div.list>div.list-1>div.right>div.right-t>span");
        Elements intelligences = document.select("div.list>div.list-5>p");
        Elements imgUrls = document.select("div.list>div.list-1>div.left>a");
        Elements temperaments = document.select("div.list>div.list-3");

        return IntStream.range(0, breeds.size())
                .mapToObj(i -> Dog.builder()
                        .seq(i + 1)
                        .breed(breeds.get(i).text())
                        .lifespan(lifespans.get(i).text())
                        .intelligence(intelligences.get(i).text())
                        .imgUrl(imgUrls.get(i).select("img").attr("src"))
                        .temperament(temperaments.get(i).text())
                        .build()
                ).peek(dog -> System.out.println(dog))
                .collect(Collectors.toList());

    }

    private Document getDogBreedsDocument(String url) {
        try {
            Connection.Response homepage = Jsoup.connect(url)
                    .method(Connection.Method.GET)
                    .userAgent("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.27.04.103 Safari/537.36")
                    .execute();
            return homepage.parse();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
