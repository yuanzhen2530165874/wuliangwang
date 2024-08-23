package com.ruoyi.system.domain;

import java.math.BigDecimal;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

/**
 * 数据采集对象 cst_data
 * 
 * @author ruoyi
 * @date 2024-08-20
 */
public class CstData extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** $column.columnComment */
    private Long id;

    /** 设备ID */
    @Excel(name = "设备ID")
    private String sbId;

    /** 设备名称 */
    @Excel(name = "设备名称")
    private String sbName;

    /** 地点ID  customer_id */
    @Excel(name = "地点ID  customer_id")
    private Long placeId;

    /** 地点名称 */
    @Excel(name = "地点名称")
    private String placeName;

    /** 地点类型 */
    @Excel(name = "地点类型")
    private String customerType;

    /** 温度 */
    @Excel(name = "温度")
    private BigDecimal wd;

    /** 压力 */
    @Excel(name = "压力")
    private BigDecimal yl;

    /** 流量 */
    @Excel(name = "流量")
    private BigDecimal ll;

    /** 状态（0正常 1停用） */
    @Excel(name = "状态", readConverterExp = "0=正常,1=停用")
    private String status;

    /** 时间 */
    @Excel(name = "时间")
    private String attra1;

    /** 流速 */
    @Excel(name = "流速")
    private String attra2;

    /** 备注3 */
    @Excel(name = "备注3")
    private String attra3;

    /** 用电量 */
    @Excel(name = "用电量")
    private BigDecimal electricity;

    /** 环境温度 */
    @Excel(name = "环境温度")
    private BigDecimal hjWd;

    /** 水位高度 */
    @Excel(name = "水位高度")
    private BigDecimal gd;

    public void setId(Long id) 
    {
        this.id = id;
    }

    public Long getId() 
    {
        return id;
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

    public void setPlaceId(Long placeId) 
    {
        this.placeId = placeId;
    }

    public Long getPlaceId() 
    {
        return placeId;
    }

    public void setPlaceName(String placeName) 
    {
        this.placeName = placeName;
    }

    public String getPlaceName() 
    {
        return placeName;
    }

    public void setCustomerType(String customerType) 
    {
        this.customerType = customerType;
    }

    public String getCustomerType() 
    {
        return customerType;
    }

    public void setWd(BigDecimal wd) 
    {
        this.wd = wd;
    }

    public BigDecimal getWd() 
    {
        return wd;
    }

    public void setYl(BigDecimal yl) 
    {
        this.yl = yl;
    }

    public BigDecimal getYl() 
    {
        return yl;
    }

    public void setLl(BigDecimal ll) 
    {
        this.ll = ll;
    }

    public BigDecimal getLl() 
    {
        return ll;
    }

    public void setStatus(String status) 
    {
        this.status = status;
    }

    public String getStatus() 
    {
        return status;
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

    public void setElectricity(BigDecimal electricity) 
    {
        this.electricity = electricity;
    }

    public BigDecimal getElectricity() 
    {
        return electricity;
    }

    public void setHjWd(BigDecimal hjWd) 
    {
        this.hjWd = hjWd;
    }

    public BigDecimal getHjWd() 
    {
        return hjWd;
    }

    public void setGd(BigDecimal gd) 
    {
        this.gd = gd;
    }

    public BigDecimal getGd() 
    {
        return gd;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("sbId", getSbId())
            .append("sbName", getSbName())
            .append("placeId", getPlaceId())
            .append("placeName", getPlaceName())
            .append("customerType", getCustomerType())
            .append("wd", getWd())
            .append("yl", getYl())
            .append("ll", getLl())
            .append("status", getStatus())
            .append("createBy", getCreateBy())
            .append("createTime", getCreateTime())
            .append("updateBy", getUpdateBy())
            .append("updateTime", getUpdateTime())
            .append("attra1", getAttra1())
            .append("attra2", getAttra2())
            .append("attra3", getAttra3())
            .append("electricity", getElectricity())
            .append("hjWd", getHjWd())
            .append("gd", getGd())
            .toString();
    }
}
