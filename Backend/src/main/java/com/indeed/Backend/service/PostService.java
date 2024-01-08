package com.indeed.Backend.service;

import java.util.List;

import com.indeed.Backend.dto.PostDTO;
import com.indeed.Backend.model.PostModel;

public interface PostService {



    public PostModel savePost(PostDTO PostDTO);

    public List<PostModel> GetAllPosts();
    
} 