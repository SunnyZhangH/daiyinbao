package com.neimeng.daiyinbao.cunqian.controller;
import com.neimeng.daiyinbao.cunqian.pojo.GoodsInfo;
import com.neimeng.daiyinbao.cunqian.service.IGoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * @author fxkstart
 * @create 2022-05-22 21:37
 */
@Controller
@RequestMapping("goods")
public class GoodsController {
    @Autowired
    private IGoodsService goodsService;

    @RequestMapping("/findAllGoods")
    public String findAllGoods(Model model){
        List <GoodsInfo> allGoods = goodsService.findAllGoods();
        model.addAttribute("allGoods",allGoods);
        return "/hello";
    }

    @RequestMapping("/findGoodsById")
    public String findGoodsById(GoodsInfo goodsInfo,Model model){
        GoodsInfo goods = goodsService.findGoodsById(goodsInfo);
        model.addAttribute("goodsInfo",goods);
        return "/hello";
    }

    @RequestMapping("/updateGoods")
    public String updateGoods(GoodsInfo goodsInfo,Model model){
        if (goodsService.updateGoods(goodsInfo)){
            return null;
        }else{
            model.addAttribute("a","");
            return null;
        }
    }
    @RequestMapping("/delGoods")
    public String delGoods(GoodsInfo goodsInfo,Model model){
        if (goodsService.delGoods(goodsInfo)){
            return null;
        }else{
            model.addAttribute("","");
            return null;
        }
    }
}
