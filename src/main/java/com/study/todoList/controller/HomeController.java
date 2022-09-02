package com.study.todoList.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;

@Controller
public class HomeController {
    @GetMapping("/")
    public ModelAndView home(Model model, HttpSession session) throws Exception {
        ModelAndView mav = new ModelAndView();
        mav.setViewName("index");

        return mav;
    }
}
