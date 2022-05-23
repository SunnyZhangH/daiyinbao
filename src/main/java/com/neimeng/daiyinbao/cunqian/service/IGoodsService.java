package com.neimeng.daiyinbao.cunqian.service;

import com.neimeng.daiyinbao.cunqian.pojo.GoodsInfo;

import java.util.List;

/**
 * @author fxkstart
 * @create 2022-05-22 20:11
 */
public interface IGoodsService {
    List<GoodsInfo> findAllGoods();
    GoodsInfo findGoodsById(GoodsInfo goodsInfo);
    boolean addGoods(GoodsInfo goodsInfo);
    boolean updateGoods(GoodsInfo goodsInfo);
    boolean delGoods(GoodsInfo goodsInfo);
}
