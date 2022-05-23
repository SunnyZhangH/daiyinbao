package com.neimeng.daiyinbao.people.service;

import com.neimeng.daiyinbao.people.pojo.CustomerInfo;

import java.util.List;

public interface ICustomerService {
       CustomerInfo findCustomerCardIdAndPwd(CustomerInfo customerInfo);
       CustomerInfo findCustomerById(CustomerInfo customerInfo);
       CustomerInfo findByCardId(CustomerInfo customerInfo);
       CustomerInfo findByCustomerCardId(String customerCardId);
       List<CustomerInfo> findAllCustomer();
       boolean CustomerLogin(CustomerInfo customerInfo);
       boolean addCustomer(CustomerInfo customerInfo);
       boolean updateCustomer(CustomerInfo customerInfo);
       boolean delCustomer(CustomerInfo customerInfo);
       boolean checkCardId(CustomerInfo customerInfo);
}
