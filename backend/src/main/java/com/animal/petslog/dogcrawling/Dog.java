package com.animal.petslog.dogcrawling;

import javafx.util.Builder;

public class Dog {
    private final int seq;
    private final String breed, lifespan, intelligence, imgUrl, temperament;

    public Dog(Builder builder) {
        this.seq = builder.seq;
        this.breed = builder.breed;
        this.lifespan = builder.lifespan;
        this.intelligence = builder.intelligence;
        this.imgUrl = builder.imgUrl;
        this.temperament = builder.temperament;
    }

    public static Builder builder() {
        return new Builder();
    }

    public int getSeq() {
        return seq;
    }

    public String getBreed() {
        return breed;
    }

    public String getLifespan() {
        return lifespan;
    }

    public String getIntelligence() {
        return intelligence;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public String getTemperament() {
        return temperament;
    }

    @Override
    public String toString() {
        return "Dog{" +
                "seq=" + seq +
                ", breed='" + breed + '\'' +
                ", lifespan='" + lifespan + '\'' +
                ", intelligence='" + intelligence + '\'' +
                ", imgUrl='" + imgUrl + '\'' +
                ", temperament='" + temperament + '\'' +
                '}';
    }

    public static class Builder {
        private int seq;
        private String breed, lifespan, intelligence, imgUrl, temperament;

        private Builder() {
        }

        public Builder seq(int seq) {
            this.seq = seq;
            return this;
        }

        public Builder breed(String breed) {
            this.breed = breed;
            return this;
        }

        public Builder lifespan(String lifespan) {
            this.lifespan = lifespan;
            return this;
        }

        public Builder intelligence(String intelligence) {
            this.intelligence = intelligence;
            return this;
        }

        public Builder imgUrl(String imgUrl) {
            this.imgUrl = imgUrl;
            return this;
        }

        public Builder temperament(String temperament) {
            this.temperament = temperament;
            return this;
        }

        public Dog build() {
            return new Dog(this);
        }
    }
}
