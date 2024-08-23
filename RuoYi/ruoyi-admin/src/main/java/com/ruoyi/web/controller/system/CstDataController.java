package com.ruoyi.web.controller.system;

import java.util.List;

import com.alibaba.fastjson.JSON;
import com.ruoyi.system.domain.Vo.Resultvo;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import com.ruoyi.common.annotation.Log;
import com.ruoyi.common.enums.BusinessType;
import com.ruoyi.system.domain.CstData;
import com.ruoyi.system.service.ICstDataService;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.core.page.TableDataInfo;

/**
 * 数据采集Controller
 * 
 * @author ruoyi
 * @date 2024-08-20
 */
@Controller
@CrossOrigin(origins = "http://localhost:63342") // 允许特定来源
@RequestMapping("/system/data")
public class CstDataController extends BaseController
{
    private String prefix = "system/data";

    @Autowired
    private ICstDataService cstDataService;

    @RequiresPermissions("system:data:view")
    @GetMapping()
    public String data()
    {
        return prefix + "/data";
    }

    @RequiresPermissions("system:customer:list")
    @GetMapping("/tzdata")
    public String tzdata()
    {
        return "/system/data/data";
    }
    @RequiresPermissions("system:customer:list")
    @GetMapping("/tzdatamonth")
    public String tzdatamonth()
    {
        return "/system/data/datamonth";
    }
    /**
     * 查询数据采集列表
     */
    @RequiresPermissions("system:data:list")
    @PostMapping("/list")
    @ResponseBody
    public TableDataInfo list(CstData cstData)
    {
        System.out.println("cstData"+cstData);
        startPage();
        List<CstData> list = cstDataService.selectCstDataList(cstData);
        return getDataTable(list);
    }
    @RequiresPermissions("system:data:list")
    @PostMapping("/list2")
    @ResponseBody
    public TableDataInfo list2(Long id)
    {
        CstData cstData = new CstData();
        cstData.setId(id);
        System.out.println("cstData"+cstData);
        startPage();
        List<CstData> list = cstDataService.selectCstDataList(cstData);
        System.out.println(list);

        return getDataTable(list);
    }
    @RequiresPermissions("system:data:list")
    @PostMapping("/qb")
    @ResponseBody
    public String qb(CstData cstData)
    {
        startPage();
        List<CstData> list = cstDataService.selectCstDataList(cstData);
        Resultvo resultvo=new Resultvo();
        resultvo.setCode(0);
        resultvo.setData(list);
        resultvo.setMessage("成功");
        String jsonString = JSON.toJSONString(resultvo);
        System.out.println("5555"+list.get(0).getCreateTime());
        return jsonString;
    }
    /**
     * 导出数据采集列表
     */
    @RequiresPermissions("system:data:export")
    @Log(title = "数据采集", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    @ResponseBody
    public AjaxResult export(CstData cstData)
    {
        List<CstData> list = cstDataService.selectCstDataList(cstData);
        ExcelUtil<CstData> util = new ExcelUtil<CstData>(CstData.class);
        return util.exportExcel(list, "数据采集数据");
    }

    /**
     * 新增数据采集
     */
    @GetMapping("/add")
    public String add()
    {
        return prefix + "/add";
    }

    /**
     * 新增保存数据采集
     */
    @RequiresPermissions("system:data:add")
    @Log(title = "数据采集", businessType = BusinessType.INSERT)
    @PostMapping("/add")
    @ResponseBody
    public AjaxResult addSave(CstData cstData)
    {
        return toAjax(cstDataService.insertCstData(cstData));
    }

    /**
     * 修改数据采集
     */
    @RequiresPermissions("system:data:edit")
    @GetMapping("/edit/{id}")
    public String edit(@PathVariable("id") Long id, ModelMap mmap)
    {
        CstData cstData = cstDataService.selectCstDataById(id);
        mmap.put("cstData", cstData);
        return prefix + "/edit";
    }

    /**
     * 修改保存数据采集
     */
    @RequiresPermissions("system:data:edit")
    @Log(title = "数据采集", businessType = BusinessType.UPDATE)
    @PostMapping("/edit")
    @ResponseBody
    public AjaxResult editSave(CstData cstData)
    {
        return toAjax(cstDataService.updateCstData(cstData));
    }

    /**
     * 删除数据采集
     */
    @RequiresPermissions("system:data:remove")
    @Log(title = "数据采集", businessType = BusinessType.DELETE)
    @PostMapping( "/remove")
    @ResponseBody
    public AjaxResult remove(String ids)
    {
        return toAjax(cstDataService.deleteCstDataByIds(ids));
    }
}
