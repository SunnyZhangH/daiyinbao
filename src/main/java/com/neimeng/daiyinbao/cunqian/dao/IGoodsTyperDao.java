package com.neimeng.daiyinbao.cunqian.dao;

import com.neimeng.daiyinbao.cunqian.pojo.CustomerInfo;
import com.neimeng.daiyinbao.cunqian.pojo.GoodsTypeInfo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IGoodsTyperDao {
    GoodsTypeInfo findGoodsType(GoodsTypeInfo goodsTypeInfo);
    List<GoodsTypeInfo> findAllGoodsType();
    int addGoodsType(GoodsTypeInfo goodsTypeInfo);
    int updateGoodsType(GoodsTypeInfo goodsTypeInfo);
    int delGoodsType(GoodsTypeInfo goodsTypeInfo);

}
