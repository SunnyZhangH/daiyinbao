package com.neimeng.daiyinbao.cunqian.service;

import com.neimeng.daiyinbao.cunqian.pojo.CustomerInfo;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

public interface ICustomerService {

       CustomerInfo findCustomerCardIdAndPwd(CustomerInfo customerInfo);
       CustomerInfo findCustomerById(CustomerInfo customerInfo);
       CustomerInfo findByCardId(CustomerInfo customerInfo);
       List<CustomerInfo> findAllCustomer();
       boolean CustomerLogin(CustomerInfo customerInfo);
       boolean addCustomer(CustomerInfo customerInfo);
       boolean updateCustomer(CustomerInfo customerInfo);
       boolean delCustomer(CustomerInfo customerInfo);
       boolean checkCardId(CustomerInfo customerInfo);
}
