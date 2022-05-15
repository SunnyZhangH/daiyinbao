package com.neimeng.daiyinbao.cunqian.service.imp;

import com.neimeng.daiyinbao.cunqian.dao.ICustomerDao;
import com.neimeng.daiyinbao.cunqian.dao.IGoodsTyperDao;
import com.neimeng.daiyinbao.cunqian.pojo.CustomerInfo;
import com.neimeng.daiyinbao.cunqian.pojo.GoodsTypeInfo;
import com.neimeng.daiyinbao.cunqian.service.ICustomerService;
import com.neimeng.daiyinbao.cunqian.service.IGoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Service
@Transactional

public class GoodsTypeServiceImp implements IGoodsService {
    @Autowired
    private IGoodsTyperDao goodsTyperDao;
    @Override
    public GoodsTypeInfo findGoodsType(GoodsTypeInfo goodsTypeInfo) {
        return goodsTyperDao.findGoodsType(goodsTypeInfo);
    }

    @Override
    public List<GoodsTypeInfo> findAllGoodsType() {
        return goodsTyperDao.findAllGoodsType();
    }

    @Override
    public boolean addGoodsType(GoodsTypeInfo goodsTypeInfo) {
        return goodsTyperDao.addGoodsType(goodsTypeInfo)>0;
    }

    @Override
    public boolean updateGoodsType(GoodsTypeInfo goodsTypeInfo) {
        return goodsTyperDao.updateGoodsType(goodsTypeInfo)>0;
    }

    @Override
    public boolean delGoodsType(GoodsTypeInfo goodsTypeInfo) {
        return goodsTyperDao.delGoodsType(goodsTypeInfo)>0;
    }
}
