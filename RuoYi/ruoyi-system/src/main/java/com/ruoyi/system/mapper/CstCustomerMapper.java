package com.ruoyi.system.mapper;

import java.util.List;
import com.ruoyi.system.domain.CstCustomer;

/**
 * 总客户Mapper接口
 * 
 * @author ruoyi
 * @date 2024-08-20
 */
public interface CstCustomerMapper 
{
    /**
     * 查询总客户
     * 
     * @param customerId 总客户主键
     * @return 总客户
     */
    public CstCustomer selectCstCustomerByCustomerId(Long customerId);

    /**
     * 查询总客户列表
     * 
     * @param cstCustomer 总客户
     * @return 总客户集合
     */
    public List<CstCustomer> selectCstCustomerList();

    /**
     * 新增总客户
     * 
     * @param cstCustomer 总客户
     * @return 结果
     */
    public int insertCstCustomer(CstCustomer cstCustomer);

    /**
     * 修改总客户
     * 
     * @param cstCustomer 总客户
     * @return 结果
     */
    public int updateCstCustomer(CstCustomer cstCustomer);

    /**
     * 删除总客户
     * 
     * @param customerId 总客户主键
     * @return 结果
     */
    public int deleteCstCustomerByCustomerId(Long customerId);

    /**
     * 批量删除总客户
     * 
     * @param customerIds 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteCstCustomerByCustomerIds(String[] customerIds);
}
