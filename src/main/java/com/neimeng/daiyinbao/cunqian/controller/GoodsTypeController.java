package com.neimeng.daiyinbao.cunqian.controller;

import com.neimeng.daiyinbao.cunqian.pojo.GoodsTypeInfo;
import com.neimeng.daiyinbao.cunqian.service.IGoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;

@Controller
@RequestMapping("/goodType")
public class GoodsTypeController {
    @Autowired
    private IGoodsService iGoodsService;
    @RequestMapping("findAll")
    public String findAll(Model model){
        System.out.println("haha");
        List<GoodsTypeInfo> goodsTypeInfoList=iGoodsService.findAllGoodsType();
        model.addAttribute("goodsTypeInfoList",goodsTypeInfoList);
        return "/reception/normal_user/cunqian_user/cunqian_user";
    }
    @RequestMapping("findTypeById")
    public String findTypeById(GoodsTypeInfo goodsTypeInfo,Model model){
        GoodsTypeInfo goodsTypeInfo1=iGoodsService.findGoodsType(goodsTypeInfo);
        model.addAttribute("goodsTypeInfo1",goodsTypeInfo1);
        return "/reception/normal_user/cunqian_user/huo_cun";
    }
}
