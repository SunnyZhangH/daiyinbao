package com.neimeng.daiyinbao.cunqian.dao;

import com.neimeng.daiyinbao.cunqian.pojo.CustomerInfo;

import java.util.List;

public interface ICustomerDao {
    CustomerInfo findCustomer(CustomerInfo customerInfo);
    List<CustomerInfo> findAllCustomer();
    int addCustomer(CustomerInfo customerInfo);
    int updateCustomer(CustomerInfo customerInfo);
    int delCustomer(CustomerInfo customerInfo);

}
