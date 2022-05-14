package com.neimeng.daiyinbao.cunqian.pojo;

public class GoodsTypeInfo {
    private int typeId;
    private String typeName;
    private String state;
    private double totalMoney;
    private int totalPerson;

    public GoodsTypeInfo() {
    }

    public GoodsTypeInfo(int typeId, String typeName, String state, double totalMoney, int totalPerson) {
        this.typeId = typeId;
        this.typeName = typeName;
        this.state = state;
        this.totalMoney = totalMoney;
        this.totalPerson = totalPerson;
    }

    public int getTypeId() {
        return typeId;
    }

    public void setTypeId(int typeId) {
        this.typeId = typeId;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
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
}
