package com.ruoyi.web.controller.system;

import java.util.ArrayList;
import java.util.List;

import com.alibaba.fastjson.JSON;
import com.ruoyi.system.domain.Vo.Resultvo;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ruoyi.common.annotation.Log;
import com.ruoyi.common.enums.BusinessType;
import com.ruoyi.system.domain.CstCustomer;
import com.ruoyi.system.service.ICstCustomerService;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.utils.StringUtils;
import com.ruoyi.common.core.domain.Ztree;

/**
 * 总客户Controller
 * 
 * @author ruoyi
 * @date 2024-08-20
 */
@Controller
@RequestMapping("/system/customer")
public class CstCustomerController extends BaseController
{
    private String prefix = "system/customer";

    @Autowired
    private ICstCustomerService cstCustomerService;

    @RequiresPermissions("system:customer:view")
    @GetMapping()
    public String customer()
    {
        return prefix + "/customer";
    }

    /**
     * 查询总客户树列表
     */
    @RequiresPermissions("system:customer:list")
    @GetMapping("/tzpick")
    public String tzpick()
    {
        return "/system/customer/customer";
    }
    @RequiresPermissions("system:customer:list")
    @PostMapping("/list")
    @ResponseBody
    public List<CstCustomer> list(Model model)
    {
        List<CstCustomer> list = cstCustomerService.selectCstCustomerList();
        for(CstCustomer cstCustomer:list)
        {
            if (cstCustomer.getStatus().equals("0"))
            {
                cstCustomer.setStatus("正常");
            }
            else {
                cstCustomer.setStatus("不正常");

            }
        }
        return list;
    }
    @RequiresPermissions("system:customer:list")
    @PostMapping("/list1")
    @ResponseBody
    public String list1(Model model)
    {
        List<CstCustomer> list = cstCustomerService.selectCstCustomerList();
        List list1=new ArrayList();
        for(CstCustomer cstCustomer:list)
        {
            if(cstCustomer.getParentId()==100)

            {
                list1.add(cstCustomer);

            }
        }
        Resultvo resultvo=new Resultvo();
        resultvo.setCode(0);
        resultvo.setData(list1);
        resultvo.setMessage("成功");
        String jsonString = JSON.toJSONString(resultvo);
        return jsonString;

    }
    /**
     * 导出总客户列表
     */
    @RequiresPermissions("system:customer:export")
    @Log(title = "总客户", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    @ResponseBody
    public AjaxResult export()
    {
        List<CstCustomer> list = cstCustomerService.selectCstCustomerList();
        ExcelUtil<CstCustomer> util = new ExcelUtil<CstCustomer>(CstCustomer.class);
        return util.exportExcel(list, "总客户数据");
    }

    /**
     * 新增总客户
     */
    @GetMapping(value = { "/add/{customerId}", "/add/" })
    public String add(@PathVariable(value = "customerId", required = false) Long customerId, ModelMap mmap)
    {
        if (StringUtils.isNotNull(customerId))
        {
            mmap.put("cstCustomer", cstCustomerService.selectCstCustomerByCustomerId(customerId));
        }
        return prefix + "/add";
    }

    /**
     * 新增保存总客户
     */
    @RequiresPermissions("system:customer:add")
    @Log(title = "总客户", businessType = BusinessType.INSERT)
    @PostMapping("/add")
    @ResponseBody
    public AjaxResult addSave(CstCustomer cstCustomer)
    {
        return toAjax(cstCustomerService.insertCstCustomer(cstCustomer));
    }

    /**
     * 修改总客户
     */
    @RequiresPermissions("system:customer:edit")
    @GetMapping("/edit/{customerId}")
    public String edit(@PathVariable("customerId") Long customerId, ModelMap mmap)
    {
        CstCustomer cstCustomer = cstCustomerService.selectCstCustomerByCustomerId(customerId);
        mmap.put("cstCustomer", cstCustomer);
        return prefix + "/edit";
    }

    /**
     * 修改保存总客户
     */
    @RequiresPermissions("system:customer:edit")
    @Log(title = "总客户", businessType = BusinessType.UPDATE)
    @PostMapping("/edit")
    @ResponseBody
    public AjaxResult editSave(CstCustomer cstCustomer)
    {
        return toAjax(cstCustomerService.updateCstCustomer(cstCustomer));
    }

    /**
     * 删除
     */
    @RequiresPermissions("system:customer:remove")
    @Log(title = "总客户", businessType = BusinessType.DELETE)
    @GetMapping("/remove/{customerId}")
    @ResponseBody
    public AjaxResult remove(@PathVariable("customerId") Long customerId)
    {
        return toAjax(cstCustomerService.deleteCstCustomerByCustomerId(customerId));
    }

    /**
     * 选择总客户树
     */
    @GetMapping(value = { "/selectCustomerTree/{customerId}", "/selectCustomerTree/" })
    public String selectCustomerTree(@PathVariable(value = "customerId", required = false) Long customerId, ModelMap mmap)
    {
        if (StringUtils.isNotNull(customerId))
        {
            mmap.put("cstCustomer", cstCustomerService.selectCstCustomerByCustomerId(customerId));
        }
        return prefix + "/tree";
    }

    /**
     * 加载总客户树列表
     */
    @GetMapping("/treeData")
    @ResponseBody
    public List<Ztree> treeData()
    {
        List<Ztree> ztrees = cstCustomerService.selectCstCustomerTree();
        return ztrees;
    }
}
