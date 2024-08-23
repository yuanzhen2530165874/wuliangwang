package com.ruoyi.system.service.impl;

import java.util.List;
import java.util.ArrayList;
import com.ruoyi.common.core.domain.Ztree;
import com.ruoyi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.system.mapper.CstCustomerMapper;
import com.ruoyi.system.domain.CstCustomer;
import com.ruoyi.system.service.ICstCustomerService;
import com.ruoyi.common.core.text.Convert;

/**
 * 总客户Service业务层处理
 * 
 * @author ruoyi
 * @date 2024-08-20
 */
@Service
public class CstCustomerServiceImpl implements ICstCustomerService 
{
    @Autowired
    private CstCustomerMapper cstCustomerMapper;

    /**
     * 查询总客户
     * 
     * @param customerId 总客户主键
     * @return 总客户
     */
    @Override
    public CstCustomer selectCstCustomerByCustomerId(Long customerId)
    {
        return cstCustomerMapper.selectCstCustomerByCustomerId(customerId);
    }

    /**
     * 查询总客户列表
     * 
     * @param cstCustomer 总客户
     * @return 总客户
     */
    @Override
    public List<CstCustomer> selectCstCustomerList()
    {
        return cstCustomerMapper.selectCstCustomerList();
    }

    /**
     * 新增总客户
     * 
     * @param cstCustomer 总客户
     * @return 结果
     */
    @Override
    public int insertCstCustomer(CstCustomer cstCustomer)
    {
        cstCustomer.setCreateTime(DateUtils.getNowDate());
        return cstCustomerMapper.insertCstCustomer(cstCustomer);
    }

    /**
     * 修改总客户
     * 
     * @param cstCustomer 总客户
     * @return 结果
     */
    @Override
    public int updateCstCustomer(CstCustomer cstCustomer)
    {
        cstCustomer.setUpdateTime(DateUtils.getNowDate());
        return cstCustomerMapper.updateCstCustomer(cstCustomer);
    }

    /**
     * 批量删除总客户
     * 
     * @param customerIds 需要删除的总客户主键
     * @return 结果
     */
    @Override
    public int deleteCstCustomerByCustomerIds(String customerIds)
    {
        return cstCustomerMapper.deleteCstCustomerByCustomerIds(Convert.toStrArray(customerIds));
    }

    /**
     * 删除总客户信息
     * 
     * @param customerId 总客户主键
     * @return 结果
     */
    @Override
    public int deleteCstCustomerByCustomerId(Long customerId)
    {
        return cstCustomerMapper.deleteCstCustomerByCustomerId(customerId);
    }

    /**
     * 查询总客户树列表
     * 
     * @return 所有总客户信息
     */
    @Override
    public List<Ztree> selectCstCustomerTree()
    {
        List<CstCustomer> cstCustomerList = cstCustomerMapper.selectCstCustomerList();
        List<Ztree> ztrees = new ArrayList<Ztree>();
        for (CstCustomer cstCustomer : cstCustomerList)
        {
            Ztree ztree = new Ztree();
            ztree.setId(cstCustomer.getCustomerId());
            ztree.setpId(cstCustomer.getParentId());
            ztree.setName(cstCustomer.getCustomerName());
            ztree.setTitle(cstCustomer.getCustomerName());
            ztrees.add(ztree);
        }
        return ztrees;
    }
}
