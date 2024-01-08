package com.indeed.Backend.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.indeed.Backend.model.PostModel;

public interface PostDao extends MongoRepository<PostModel, String> {

}
