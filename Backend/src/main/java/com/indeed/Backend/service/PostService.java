package com.indeed.Backend.service;

import com.indeed.Backend.dto.PostDTO;
import com.indeed.Backend.model.PostModel;

import java.util.List;

public interface PostService {

    public List<PostModel> getAllPosts();

    public PostModel savePost(PostDTO post);
}