package com.neimeng.daiyinbao.cunqian.controller;
import com.neimeng.daiyinbao.cunqian.pojo.GoodsTypeInfo;
import com.neimeng.daiyinbao.cunqian.service.IGoodsTypeService;
import com.neimeng.daiyinbao.people.pojo.CustomerInfo;
import com.neimeng.daiyinbao.people.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import javax.servlet.http.HttpSession;
import java.util.List;
@Controller
@RequestMapping("/goodType")
public class GoodsTypeController {
    @Autowired
    private IGoodsTypeService iGoodsTypeService;
    @Autowired
    private ICustomerService customerService;
    @RequestMapping("findAll")
    public String findAll(Model model, HttpSession session){
        List<GoodsTypeInfo> goodsTypeInfoList= iGoodsTypeService.findAllGoodsType();
        model.addAttribute("goodsTypeInfoList",goodsTypeInfoList);
        String sessionCardId=session.getAttribute("cardID").toString();
        CustomerInfo customerInfo1=customerService.findByCustomerCardId(sessionCardId);
        boolean customerCrestate=customerInfo1.isCustomerCrestate();
        int customerAccount = (int)customerInfo1.getCustomerAccount();
        int customerCredit=Integer.parseInt(customerInfo1.getCustomerCredit());
        if (customerCrestate==false){
            System.out.println("正常用户");
            if(customerAccount>=0){
                System.out.println("不是借户");
                if(customerCredit>=600){
                    customerInfo1.setState("1");
                    if (customerService.updateCustomer(customerInfo1)){
                        System.out.println("可贷款状态已开通");
                    }else {
                        System.out.println("可贷款状态开通失败");
                    }
                    System.out.println("可向系统用户贷款");
                    if(customerAccount>=100000){
                        customerInfo1.setCustomerBorlistate("1");
                        if (customerService.updateCustomer(customerInfo1)){
                            System.out.println("可放款状态已开通");
                        }else {
                            System.out.println("可放款状态开通失败");
                        }
                        System.out.println("可向系统用户放贷");
                        //有向系统用户放贷的权力
                    }else{
                        //想用户贷款
                        System.out.println("只能向其他用户借款");
                    }
                }else{
                    System.out.println("正常向银行借款");
                }

            }else{
                System.out.println("是借户");
            }
        }else{
            System.out.println("失信用户");
            //只加载goodstype中的还款界面
        }
        return "/reception/normal_user/cunqian_user/cunqian_user";
    }
    @RequestMapping("findTypeById")
    public String findTypeById(GoodsTypeInfo goodsTypeInfo,Model model){
        GoodsTypeInfo goodsTypeInfo1= iGoodsTypeService.findGoodsType(goodsTypeInfo);
        model.addAttribute("goodsTypeInfo1",goodsTypeInfo1);
        return "/reception/normal_user/cunqian_user/huo_cun";
    }
}
