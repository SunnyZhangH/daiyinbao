package com.neimeng.daiyinbao.cunqian.service;

import com.neimeng.daiyinbao.cunqian.pojo.GoodsTypeInfo;

import java.util.List;

public interface IGoodsTypeService {

       GoodsTypeInfo findGoodsType(GoodsTypeInfo goodsTypeInfo);
       List<GoodsTypeInfo> findAllGoodsType();
       boolean addGoodsType(GoodsTypeInfo goodsTypeInfo);
       boolean updateGoodsType(GoodsTypeInfo goodsTypeInfo);
       boolean delGoodsType(GoodsTypeInfo goodsTypeInfo);
}
