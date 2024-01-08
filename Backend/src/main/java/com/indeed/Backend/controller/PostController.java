package com.indeed.Backend.controller;
import com.indeed.Backend.constantans.ApiConstants;
import com.indeed.Backend.dto.PostDTO;
import com.indeed.Backend.model.PostModel;
import com.indeed.Backend.service.PostService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequiredArgsConstructor
@CrossOrigin

public class PostController {

    final PostService postService; 
    @PostMapping(ApiConstants.SAVE_POST)
    public PostModel savePost(@Valid @RequestBody PostDTO postDTORequest){
        log.info("seving post ######");
        return this.postService.savePost(postDTORequest);
    }
    @GetMapping(ApiConstants.Get_All_POSTS)
    public List<PostModel>GetAllPosts(){
        log.info("Getting all posts ####");
        return this.postService.GetAllPosts();

    }
}
