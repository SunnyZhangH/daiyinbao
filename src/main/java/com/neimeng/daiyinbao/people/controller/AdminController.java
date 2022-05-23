package com.neimeng.daiyinbao.people.controller;

import com.neimeng.daiyinbao.cunqian.funtnion.AlgFiled;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/Admin")
public class AdminController {

    @RequestMapping(value = "/adminLogin")
    public ModelAndView adminLogin(Model model){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("/reception/normal_admin/admin_login");
        return modelAndView;
    }
    @RequestMapping("/adminIndex")
    public String adminIndex( int testAdminType){
        System.out.println(testAdminType);
        return "/reception/normal_admin/admin_index";
    }
}
