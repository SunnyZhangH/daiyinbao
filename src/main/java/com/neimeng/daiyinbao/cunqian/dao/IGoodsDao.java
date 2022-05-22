package com.neimeng.daiyinbao.cunqian.dao;

import com.neimeng.daiyinbao.cunqian.pojo.GoodsInfo;

import java.util.List;

/**
 * @author fxkstart
 * @create 2022-05-22 18:53
 */
public interface IGoodsDao {
    List<GoodsInfo> findAllGoods();
    GoodsInfo findGoodsById(GoodsInfo goodsInfo);
    int addGoods(GoodsInfo goodsInfo);
    int updateGoods(GoodsInfo goodsInfo);
    int delGoods(GoodsInfo goodsInfo);


}
