package com.neimeng.daiyinbao.cunqian.controller;

import com.neimeng.daiyinbao.cunqian.pojo.CustomerInfo;
import com.neimeng.daiyinbao.cunqian.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("/customer")
public class CustomerController {
    @Autowired
    private ICustomerService customerService;

    @RequestMapping("/customerLogin")
    public String customerLogin(CustomerInfo customerInfo, Model model, HttpSession session){
        if(customerService.CustomerLogin(customerInfo)){
           session.setAttribute("customerInfo",customerService.findCustomerCardIdAndPwd(customerInfo));
           return "";
        }else{
           model.addAttribute("errorManagar","登陆错误");
           return "error";
        }
    }

    @RequestMapping("findAll")
    public String findAll(Model model){
        System.out.println("haha");
        List<CustomerInfo> customerInfoList=customerService.findAllCustomer();

        return "/hello";
    }

}
