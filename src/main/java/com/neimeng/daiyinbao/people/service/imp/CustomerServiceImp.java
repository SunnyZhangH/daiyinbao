package com.neimeng.daiyinbao.people.service.imp;

import com.neimeng.daiyinbao.people.dao.ICustomerDao;
import com.neimeng.daiyinbao.people.pojo.CustomerInfo;
import com.neimeng.daiyinbao.people.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Service
@Transactional
public class CustomerServiceImp implements ICustomerService {
    ModelAndView modelAndView=new ModelAndView();
    @Autowired
    private ICustomerDao customerDao;


    @Override
    public CustomerInfo findCustomerCardIdAndPwd(CustomerInfo customerInfo) {
        return customerDao.findCustomer(customerInfo);
    }

    @Override
    public CustomerInfo findCustomerById(CustomerInfo customerInfo) {
        return customerDao.findCustomer(customerInfo);
    }

    @Override
    public CustomerInfo findByCardId(CustomerInfo customerInfo) {
        return customerDao.findCustomer(customerInfo);
    }

    @Override
    public CustomerInfo findByCustomerCardId(String customerCardId) {
        return customerDao.findByCustomerCardId(customerCardId);
    }

    public void test(Model model){
        List<CustomerInfo> customerInfos=findAllCustomer();

    }
    @Override
    public List<CustomerInfo> findAllCustomer() {

        return customerDao.findAllCustomer();
    }

    @Override
    public boolean CustomerLogin(CustomerInfo customerInfo) {
        return customerDao.findCustomer(customerInfo)!=null?true:false;
    }

    @Override
    public boolean addCustomer(CustomerInfo customerInfo) {
        return customerDao.addCustomer(customerInfo)>0;
    }

    @Override
    public boolean updateCustomer(CustomerInfo customerInfo) {
        return customerDao.updateCustomer(customerInfo)>0;
    }

    @Override
    public boolean delCustomer(CustomerInfo customerInfo) {
        return customerDao.delCustomer(customerInfo)>0;
    }

    @Override
    public boolean checkCardId(CustomerInfo customerInfo) {
        return false;
    }
}
