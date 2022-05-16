package com.neimeng.daiyinbao.cunqian.controller;

import com.neimeng.daiyinbao.cunqian.pojo.CustomerInfo;
import com.neimeng.daiyinbao.cunqian.service.ICustomerService;
import com.neimeng.daiyinbao.cunqian.service.IGoodsService;
import com.neimeng.daiyinbao.utils.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
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
    @Autowired
    private IGoodsService iGoodsService;

    @RequestMapping("/customerLogin")
    public String customerLogin(CustomerInfo customerInfo, Model model, HttpSession session){
        if(customerService.CustomerLogin(customerInfo)){
            String cardID=customerInfo.getCustomerCardID();
            session.setAttribute("cardID",cardID);
            session.setAttribute("customerInfo",customerService.CustomerLogin(customerInfo));

           return "redirect:/goodType/findAll";
        }else{
           model.addAttribute("errorManagar","登陆错误");
           return "error";
        }
    }
    @RequestMapping("showHome")
    public String showHome(CustomerInfo customerInfo,Model model){
        StringUtil stringUtil=new StringUtil();
        String uuid=stringUtil.getRandomValue(4);
        model.addAttribute("uuid",uuid);
        return "/reception/normal_user/user_login";
    }

    @RequestMapping("/showAllCustomer")
    public String showAllCustomer(Model model){
        List<CustomerInfo> list = customerService.findAllCustomer();
        model.addAttribute("customerList",list);
        return "/custommer_menus";
    }

    @RequestMapping("/showAdd")
    public String showAdd(Model model){
        return "/reception/normal_user/user_register";
    }

    @RequestMapping("addCustomer")
    public String addCustomer(CustomerInfo customerInfo,Model model){
        if(customerService.addCustomer(customerInfo)){
            return "/reception/normal_user/user_login";
        }else{
            model.addAttribute("errorManagar","登陆错误");
            return "error";
        }
    }

    @RequestMapping("/showByCardId")
    public String showByCardId(CustomerInfo customerInfo,Model model){
         CustomerInfo Info = customerService.findByCardId(customerInfo);
         model.addAttribute("customerInfo",Info);
         return "/user_update";
    }

    @RequestMapping("/showById")
    public String showById(CustomerInfo customerInfo,Model model){
        CustomerInfo Info = customerService.findCustomerById(customerInfo);
        model.addAttribute("customerInfo",Info);
        return "/user_update";
    }




    @RequestMapping("updateCustomer")
    public String updateCustomer(CustomerInfo customerInfo,Model model){
        if(customerService.updateCustomer(customerInfo)){
            return "redirect:/customer/showAllCustomer";
        }else{
            model.addAttribute("errorManagar","登陆错误");
            return "error";
        }
    }

    @RequestMapping("delCustomer")
    public String delCustomer(CustomerInfo customerInfo,Model model){
        if(customerService.delCustomer(customerInfo)){
            return "redirect:/customer/showAllCustomer";
        }else{
            model.addAttribute("errorManagar","登陆错误");
            return "error";
        }
    }


}
