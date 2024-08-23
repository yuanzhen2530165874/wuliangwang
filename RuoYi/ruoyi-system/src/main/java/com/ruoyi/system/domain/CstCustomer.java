package com.ruoyi.system.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.TreeEntity;

/**
 * 总客户对象 cst_customer
 * 
 * @author ruoyi
 * @date 2024-08-20
 */
public class CstCustomer extends TreeEntity
{
    private static final long serialVersionUID = 1L;

    /** id */
    private Long customerId;

    /** 名称 */
    @Excel(name = "名称")
    private String customerName;

    /** 地点类型 customer_type */
    @Excel(name = "地点类型 customer_type")
    private String customerType;

    /** 负责人 */
    @Excel(name = "负责人")
    private String leader;

    /** 联系电话 */
    @Excel(name = "联系电话")
    private String phone;

    /** 邮箱 */
    @Excel(name = "邮箱")
    private String email;

    /** 状态（0正常 1停用） */
    @Excel(name = "状态", readConverterExp = "0=正常,1=停用")
    private String status;

    /** 删除标志（0代表存在 2代表删除） */
    private String delFlag;

    /** 绑定设备编码 */
    @Excel(name = "绑定设备编码")
    private String sbId;

    /** 绑定设备名称 */
    @Excel(name = "绑定设备名称")
    private String sbName;

    /** 最高温度 */
    @Excel(name = "最高温度")
    private String attra1;

    /** 最高压力 */
    @Excel(name = "最高压力")
    private String attra2;

    /** 最大流速 */
    @Excel(name = "最大流速")
    private String attra3;

    /** 祖级列表ID */
    @Excel(name = "祖级列表ID")
    private String attra4;

    /**  */
    @Excel(name = "")
    private String attra5;

    public void setCustomerId(Long customerId) 
    {
        this.customerId = customerId;
    }

    public Long getCustomerId() 
    {
        return customerId;
    }

    public void setCustomerName(String customerName) 
    {
        this.customerName = customerName;
    }

    public String getCustomerName() 
    {
        return customerName;
    }

    public void setCustomerType(String customerType) 
    {
        this.customerType = customerType;
    }

    public String getCustomerType() 
    {
        return customerType;
    }

    public void setLeader(String leader) 
    {
        this.leader = leader;
    }

    public String getLeader() 
    {
        return leader;
    }

    public void setPhone(String phone) 
    {
        this.phone = phone;
    }

    public String getPhone() 
    {
        return phone;
    }

    public void setEmail(String email) 
    {
        this.email = email;
    }

    public String getEmail() 
    {
        return email;
    }

    public void setStatus(String status) 
    {
        this.status = status;
    }

    public String getStatus() 
    {
        return status;
    }

    public void setDelFlag(String delFlag) 
    {
        this.delFlag = delFlag;
    }

    public String getDelFlag() 
    {
        return delFlag;
    }

    public void setSbId(String sbId) 
    {
        this.sbId = sbId;
    }

    public String getSbId() 
    {
        return sbId;
    }

    public void setSbName(String sbName) 
    {
        this.sbName = sbName;
    }

    public String getSbName() 
    {
        return sbName;
    }

    public void setAttra1(String attra1) 
    {
        this.attra1 = attra1;
    }

    public String getAttra1() 
    {
        return attra1;
    }

    public void setAttra2(String attra2) 
    {
        this.attra2 = attra2;
    }

    public String getAttra2() 
    {
        return attra2;
    }

    public void setAttra3(String attra3) 
    {
        this.attra3 = attra3;
    }

    public String getAttra3() 
    {
        return attra3;
    }

    public void setAttra4(String attra4) 
    {
        this.attra4 = attra4;
    }

    public String getAttra4() 
    {
        return attra4;
    }

    public void setAttra5(String attra5) 
    {
        this.attra5 = attra5;
    }

    public String getAttra5() 
    {
        return attra5;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("customerId", getCustomerId())
            .append("parentId", getParentId())
            .append("ancestors", getAncestors())
            .append("customerName", getCustomerName())
            .append("customerType", getCustomerType())
            .append("orderNum", getOrderNum())
            .append("leader", getLeader())
            .append("phone", getPhone())
            .append("email", getEmail())
            .append("status", getStatus())
            .append("delFlag", getDelFlag())
            .append("sbId", getSbId())
            .append("sbName", getSbName())
            .append("createBy", getCreateBy())
            .append("createTime", getCreateTime())
            .append("updateBy", getUpdateBy())
            .append("updateTime", getUpdateTime())
            .append("attra1", getAttra1())
            .append("attra2", getAttra2())
            .append("attra3", getAttra3())
            .append("attra4", getAttra4())
            .append("attra5", getAttra5())
            .toString();
    }
}
