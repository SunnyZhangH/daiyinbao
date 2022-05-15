package com.neimeng.daiyinbao.cunqian.pojo;

public class GoodsTypeInfo {
    private int typeId;
    private String typeName;
    private String typeState;
    private Double totalMoney;
    private int totalPerson;

    public GoodsTypeInfo() {
    }

    public GoodsTypeInfo(int typeId, String typeName, String typeState, Double totalMoney, int totalPerson) {
        this.typeId = typeId;
        this.typeName = typeName;
        this.typeState = typeState;
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

    public String getTypeState() {
        return typeState;
    }

    public void setTypeState(String typeState) {
        this.typeState = typeState;
    }

    public Double getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(Double totalMoney) {
        this.totalMoney = totalMoney;
    }

    public int getTotalPerson() {
        return totalPerson;
    }

    public void setTotalPerson(int totalPerson) {
        this.totalPerson = totalPerson;
    }
}
