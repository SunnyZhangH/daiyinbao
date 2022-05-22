package com.neimeng.daiyinbao.cunqian.service.imp;

import com.neimeng.daiyinbao.cunqian.dao.IGoodsDao;
import com.neimeng.daiyinbao.cunqian.pojo.GoodsInfo;
import com.neimeng.daiyinbao.cunqian.service.IGoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author fxkstart
 * @create 2022-05-22 20:12
 */
@Service
@Transactional
public class GoodsServiceImp implements IGoodsService {
    @Autowired
    private IGoodsDao GoodsDao;
    @Override
    public List<GoodsInfo> findAllGoods() {
        return GoodsDao.findAllGoods();
    }

    @Override
    public GoodsInfo findGoodsById(GoodsInfo goodsInfo) {
        return GoodsDao.findGoodsById(goodsInfo);
    }

    @Override
    public boolean addGoods(GoodsInfo goodsInfo) {
        return GoodsDao.addGoods(goodsInfo)>0;
    }

    @Override
    public boolean updateGoods(GoodsInfo goodsInfo) {
        return GoodsDao.updateGoods(goodsInfo)>0;
    }

    @Override
    public boolean delGoods(GoodsInfo goodsInfo) {
        return GoodsDao.delGoods(goodsInfo)>0;
    }
}
