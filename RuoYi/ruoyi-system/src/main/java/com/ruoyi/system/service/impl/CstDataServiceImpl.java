package com.ruoyi.system.service.impl;

import java.util.List;
import com.ruoyi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.system.mapper.CstDataMapper;
import com.ruoyi.system.domain.CstData;
import com.ruoyi.system.service.ICstDataService;
import com.ruoyi.common.core.text.Convert;

/**
 * 数据采集Service业务层处理
 * 
 * @author ruoyi
 * @date 2024-08-20
 */
@Service
public class CstDataServiceImpl implements ICstDataService 
{
    @Autowired
    private CstDataMapper cstDataMapper;

    /**
     * 查询数据采集
     * 
     * @param id 数据采集主键
     * @return 数据采集
     */
    @Override
    public CstData selectCstDataById(Long id)
    {
        return cstDataMapper.selectCstDataById(id);
    }

    /**
     * 查询数据采集列表
     * 
     * @param cstData 数据采集
     * @return 数据采集
     */
    @Override
    public List<CstData> selectCstDataList(CstData cstData)
    {
        return cstDataMapper.selectCstDataList(cstData);
    }

    /**
     * 新增数据采集
     * 
     * @param cstData 数据采集
     * @return 结果
     */
    @Override
    public int insertCstData(CstData cstData)
    {
        cstData.setCreateTime(DateUtils.getNowDate());
        return cstDataMapper.insertCstData(cstData);
    }

    /**
     * 修改数据采集
     * 
     * @param cstData 数据采集
     * @return 结果
     */
    @Override
    public int updateCstData(CstData cstData)
    {
        cstData.setUpdateTime(DateUtils.getNowDate());
        return cstDataMapper.updateCstData(cstData);
    }

    /**
     * 批量删除数据采集
     * 
     * @param ids 需要删除的数据采集主键
     * @return 结果
     */
    @Override
    public int deleteCstDataByIds(String ids)
    {
        return cstDataMapper.deleteCstDataByIds(Convert.toStrArray(ids));
    }

    /**
     * 删除数据采集信息
     * 
     * @param id 数据采集主键
     * @return 结果
     */
    @Override
    public int deleteCstDataById(Long id)
    {
        return cstDataMapper.deleteCstDataById(id);
    }
}
