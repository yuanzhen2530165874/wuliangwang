package com.ruoyi.system.service;

import java.util.List;
import com.ruoyi.system.domain.CstData;

/**
 * 数据采集Service接口
 * 
 * @author ruoyi
 * @date 2024-08-20
 */
public interface ICstDataService 
{
    /**
     * 查询数据采集
     * 
     * @param id 数据采集主键
     * @return 数据采集
     */
    public CstData selectCstDataById(Long id);

    /**
     * 查询数据采集列表
     * 
     * @param cstData 数据采集
     * @return 数据采集集合
     */
    public List<CstData> selectCstDataList(CstData cstData);

    /**
     * 新增数据采集
     * 
     * @param cstData 数据采集
     * @return 结果
     */
    public int insertCstData(CstData cstData);

    /**
     * 修改数据采集
     * 
     * @param cstData 数据采集
     * @return 结果
     */
    public int updateCstData(CstData cstData);

    /**
     * 批量删除数据采集
     * 
     * @param ids 需要删除的数据采集主键集合
     * @return 结果
     */
    public int deleteCstDataByIds(String ids);

    /**
     * 删除数据采集信息
     * 
     * @param id 数据采集主键
     * @return 结果
     */
    public int deleteCstDataById(Long id);
}
