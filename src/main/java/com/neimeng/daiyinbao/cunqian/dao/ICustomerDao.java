package com.neimeng.daiyinbao.cunqian.dao;

import com.neimeng.daiyinbao.cunqian.pojo.CustomerInfo;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ICustomerDao {
    CustomerInfo findCustomer(CustomerInfo customerInfo);
    CustomerInfo findByCustomerCardId(String customerCardId);
    List<CustomerInfo> findAllCustomer();
    int addCustomer(CustomerInfo customerInfo);
    int updateCustomer(CustomerInfo customerInfo);
    int delCustomer(CustomerInfo customerInfo);

}
