package com.neimeng.daiyinbao.cunqian.funtnion;
/**
 * 常量全部静态修饰，本包直接类名.就可以访问 跨包类名.get方法进行访问取值
* */
public class AlgFiled {
    /**
     死期 <100000 三年利率
     2022-05-14
     */
     static final double SI_ONE_THREE=0.016;
    /**
     死期 <100000 五年利率
     2022-05-14
     */
     static final double SI_ONE_FIVE=0.0175;
    /**
     死期 <100000 十年利率
     2022-05-14
     */
     static final double SI_ONE_TEN=0.019;
    /**
     100000<死期 <500000 三年利率
     2022-05-14
     */
     static final double SI_FIVE_S_THREE=0.022;
    /**
     100000<死期 <500000 五年利率
     2022-05-14
     */
     static final double SI_FIVE_S_FIVE=0.024;
    /**
     100000<死期 <500000 十年利率
     2022-05-14
     */
     static final double SI_FIVE_S_TEN=0.026;
    /**
     死期>500000 三年利率
     2022-05-14
     */
     static final double SI_FIVE_THREE=0.028;
    /**
     死期>500000 五年利率
     2022-05-14
     */
     static final double SI_FIVE_FIVE=0.03;
    /**
     死期>500000 十年利率
     2022-05-14
     */
     static final double SI_FIVE_TEN=0.315;
    /**
     活期利率
     2022-05-14
     */
    static final double HUO_LL=0.004;

    public AlgFiled() {
    }

    public static double getSiOneThree() {
        return SI_ONE_THREE;
    }

    public static double getSiOneFive() {
        return SI_ONE_FIVE;
    }

    public static double getSiOneTen() {
        return SI_ONE_TEN;
    }

    public static double getSiFiveSThree() {
        return SI_FIVE_S_THREE;
    }

    public static double getSiFiveSFive() {
        return SI_FIVE_S_FIVE;
    }

    public static double getSiFiveSTen() {
        return SI_FIVE_S_TEN;
    }

    public static double getSiFiveThree() {
        return SI_FIVE_THREE;
    }

    public static double getSiFiveFive() {
        return SI_FIVE_FIVE;
    }

    public static double getSiFiveTen() {
        return SI_FIVE_TEN;
    }

    public static double getHuoLl() {
        return HUO_LL;
    }

}
