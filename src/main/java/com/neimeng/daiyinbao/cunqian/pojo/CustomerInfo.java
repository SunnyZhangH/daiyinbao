package com.neimeng.daiyinbao.cunqian.pojo;

public class CustomerInfo {

    private int customerId;
    private String customerName;
    private String customerPwd;
    private boolean customerSex;
    private String customerCardID;
    private int customerAge;
    private int customerTel;
    private String Img;
    private String State;
    private double customerAccount;
    private String customerCredit;
    private double customerBorlimit;
    private double customerLoan;
    private double customerBormoney;
    private String customerBorlistate;
    private String customerDepstate;
    private boolean customerCrestate;
    private String customerCrestaTime;

    public CustomerInfo(){

    }

    public CustomerInfo(int customerId, String customerName, String customerPwd, boolean customerSex, String customerCardID, int customerAge, int customerTel, String img, String state, double customerAccount, String customerCredit, double customerBorlimit, double customerLoan, double customerBormoney, String customerBorlistate, String customerDepstate, boolean customerCrestate, String customerCrestaTime) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.customerPwd = customerPwd;
        this.customerSex = customerSex;
        this.customerCardID = customerCardID;
        this.customerAge = customerAge;
        this.customerTel = customerTel;
        Img = img;
        State = state;
        this.customerAccount = customerAccount;
        this.customerCredit = customerCredit;
        this.customerBorlimit = customerBorlimit;
        this.customerLoan = customerLoan;
        this.customerBormoney = customerBormoney;
        this.customerBorlistate = customerBorlistate;
        this.customerDepstate = customerDepstate;
        this.customerCrestate = customerCrestate;
        this.customerCrestaTime = customerCrestaTime;
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerPwd() {
        return customerPwd;
    }

    public void setCustomerPwd(String customerPwd) {
        this.customerPwd = customerPwd;
    }

    public boolean isCustomerSex() {
        return customerSex;
    }

    public void setCustomerSex(boolean customerSex) {
        this.customerSex = customerSex;
    }

    public String getCustomerCardID() {
        return customerCardID;
    }

    public void setCustomerCardID(String customerCardID) {
        this.customerCardID = customerCardID;
    }

    public int getCustomerAge() {
        return customerAge;
    }

    public void setCustomerAge(int customerAge) {
        this.customerAge = customerAge;
    }

    public int getCustomerTel() {
        return customerTel;
    }

    public void setCustomerTel(int customerTel) {
        this.customerTel = customerTel;
    }

    public String getImg() {
        return Img;
    }

    public void setImg(String img) {
        Img = img;
    }

    public String getState() {
        return State;
    }

    public void setState(String state) {
        State = state;
    }

    public double getCustomerAccount() {
        return customerAccount;
    }

    public void setCustomerAccount(double customerAccount) {
        this.customerAccount = customerAccount;
    }

    public String getCustomerCredit() {
        return customerCredit;
    }

    public void setCustomerCredit(String customerCredit) {
        this.customerCredit = customerCredit;
    }

    public double getCustomerBorlimit() {
        return customerBorlimit;
    }

    public void setCustomerBorlimit(double customerBorlimit) {
        this.customerBorlimit = customerBorlimit;
    }

    public double getCustomerLoan() {
        return customerLoan;
    }

    public void setCustomerLoan(double customerLoan) {
        this.customerLoan = customerLoan;
    }

    public double getCustomerBormoney() {
        return customerBormoney;
    }

    public void setCustomerBormoney(double customerBormoney) {
        this.customerBormoney = customerBormoney;
    }

    public String getCustomerBorlistate() {
        return customerBorlistate;
    }

    public void setCustomerBorlistate(String customerBorlistate) {
        this.customerBorlistate = customerBorlistate;
    }

    public String getCustomerDepstate() {
        return customerDepstate;
    }

    public void setCustomerDepstate(String customerDepstate) {
        this.customerDepstate = customerDepstate;
    }

    public String getCustomerCrestaTime() {
        return customerCrestaTime;
    }

    public void setCustomerCrestaTime(String customerCrestaTime) {
        this.customerCrestaTime = customerCrestaTime;
    }

    public boolean isCustomerCrestate() {
        return customerCrestate;
    }

    public void setCustomerCrestate(boolean customerCrestate) {
        this.customerCrestate = customerCrestate;
    }
}
