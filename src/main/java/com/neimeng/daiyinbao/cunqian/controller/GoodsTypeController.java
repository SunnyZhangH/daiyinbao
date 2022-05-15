package com.neimeng.daiyinbao.cunqian.controller;

import com.neimeng.daiyinbao.cunqian.pojo.CustomerInfo;
import com.neimeng.daiyinbao.cunqian.pojo.GoodsTypeInfo;
import com.neimeng.daiyinbao.cunqian.service.ICustomerService;
import com.neimeng.daiyinbao.cunqian.service.IGoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("/goodType")
public class GoodsTypeController {
    @Autowired
    private IGoodsService iGoodsService;
    @Qualifier(value = "GoodsTypeServiceImp")
    @RequestMapping("findAll")
    public String findAll(Model model){
        System.out.println("haha");
        List<GoodsTypeInfo> goodsTypeInfoList=iGoodsService.findAllGoodsType();
        model.addAttribute("goodsTypeInfoList",goodsTypeInfoList);
        return "/hello";
    }
}
