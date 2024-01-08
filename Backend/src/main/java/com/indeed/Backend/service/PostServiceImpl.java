package com.indeed.Backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.indeed.Backend.dao.PostDao;
import com.indeed.Backend.dto.PostDTO;
import com.indeed.Backend.model.PostModel;

@Service
public class PostServiceImpl implements PostService{
    @Autowired
    PostDao postDao;

    @Override
    public PostModel savePost(PostDTO PostDTO){
        PostModel postModel = new PostModel();

        postModel.setProfile(PostDTO.getProfile());
        postModel.setDescription(PostDTO.getDescription());
        postModel.setSalary(PostDTO.getSalary());
        postModel.setTechnology(PostDTO.getTechnology());
        postModel.setType(PostDTO.getType());
        postModel.setExperience(PostDTO.getExperience()) ;
        return postDao.save(postModel);
    }

    @Override
    public List<PostModel> GetAllPosts() {
        // TODO Auto-generated method stub
        return postDao.findAll();
    }
    
}

