package com.neimeng.daiyinbao.cunqian.pojo;

import java.util.Date;

/**
 * @author fxkstart
 * @create 2022-05-22 18:28
 */
public class GoodsInfo {
    private int goodsId;
    private String name;
    private String introduction;
    private double minMoney;
    private Date goodsTime;
    private double interestRate;
    private double interest;
    private double totalMoney;
    private int totalPerson;
    private String goodsState;
    private GoodsTypeInfo goodsTypeInfo;
    private String algorithm;

    public GoodsInfo() {
    }

    public GoodsInfo(int goodsId, String name, String introduction, double minMoney, Date goodsTime, double interestRate, double interest, double totalMoney, int totalPerson, String goodsState, GoodsTypeInfo goodsTypeInfo, String algorithm) {
        this.goodsId = goodsId;
        this.name = name;
        this.introduction = introduction;
        this.minMoney = minMoney;
        this.goodsTime = goodsTime;
        this.interestRate = interestRate;
        this.interest = interest;
        this.totalMoney = totalMoney;
        this.totalPerson = totalPerson;
        this.goodsState = goodsState;
        this.goodsTypeInfo = goodsTypeInfo;
        this.algorithm = algorithm;
    }

    public int getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(int goodsId) {
        this.goodsId = goodsId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public double getMinMoney() {
        return minMoney;
    }

    public void setMinMoney(double minMoney) {
        this.minMoney = minMoney;
    }

    public Date getGoodsTime() {
        return goodsTime;
    }

    public void setGoodsTime(Date goodsTime) {
        this.goodsTime = goodsTime;
    }

    public double getInterestRate() {
        return interestRate;
    }

    public void setInterestRate(double interestRate) {
        this.interestRate = interestRate;
    }

    public double getInterest() {
        return interest;
    }

    public void setInterest(double interest) {
        this.interest = interest;
    }

    public double getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(double totalMoney) {
        this.totalMoney = totalMoney;
    }

    public int getTotalPerson() {
        return totalPerson;
    }

    public void setTotalPerson(int totalPerson) {
        this.totalPerson = totalPerson;
    }

    public String getGoodsState() {
        return goodsState;
    }

    public void setGoodsState(String goodsState) {
        this.goodsState = goodsState;
    }

    public GoodsTypeInfo getGoodsTypeInfo() {
        return goodsTypeInfo;
    }

    public void setGoodsTypeInfo(GoodsTypeInfo goodsTypeInfo) {
        this.goodsTypeInfo = goodsTypeInfo;
    }

    public String getAlgorithm() {
        return algorithm;
    }

    public void setAlgorithm(String algorithm) {
        this.algorithm = algorithm;
    }
}

