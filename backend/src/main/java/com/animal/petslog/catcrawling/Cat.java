package com.animal.petslog.catcrawling;

import static java.util.Objects.requireNonNull;

public class Cat {
    private final int seq;
    private final String breed, lifespan, origin, imgUrl, temperament;

    public Cat(Builder builder) {
        this.seq = builder.seq;
        this.breed = requireNonNull(builder.breed);
        this.lifespan = builder.lifespan;
        this.origin = builder.origin;
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

    public String getOrigin() {
        return origin;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public String getTemperament() {
        return temperament;
    }

    @Override
    public String toString() {
        return "Cat{" +
                "seq=" + seq +
                ", breed='" + breed + '\'' +
                ", lifespan='" + lifespan + '\'' +
                ", origin='" + origin + '\'' +
                ", imgUrl='" + imgUrl + '\'' +
                ", temperament='" + temperament + '\'' +
                '}';
    }

    public static class Builder {
        private int seq;
        private String breed, lifespan, origin, imgUrl, temperament;

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

        public Builder origin(String origin) {
            this.origin = origin;
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
        public Cat build() {
            return new Cat(this);
        }
    }
}
