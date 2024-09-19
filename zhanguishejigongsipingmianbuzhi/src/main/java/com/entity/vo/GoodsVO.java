package com.entity.vo;

import com.entity.GoodsEntity;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;

/**
 * 展柜设计
 * 手机端接口返回实体辅助类
 * （主要作用去除一些不必要的字段）
 */
@TableName("goods")
public class GoodsVO implements Serializable {
    private static final long serialVersionUID = 1L;


    /**
     * 主键
     */

    @TableField(value = "id")
    private Integer id;


    /**
     * 展柜名称
     */

    @TableField(value = "goods_name")
    private String goodsName;


    /**
     * 展柜类型
     */

    @TableField(value = "goods_types")
    private Integer goodsTypes;


    /**
     * 展柜图片
     */

    @TableField(value = "goods_photo")
    private String goodsPhoto;


    /**
     * 品牌
     */

    @TableField(value = "goods_pinpai")
    private String goodsPinpai;


    /**
     * 价格
     */

    @TableField(value = "goods_new_money")
    private Double goodsNewMoney;


    /**
     * 材质
     */

    @TableField(value = "goods_caizhi")
    private String goodsCaizhi;


    /**
     * 附加功能
     */

    @TableField(value = "goods_fujia")
    private String goodsFujia;


    /**
     * 产地
     */

    @TableField(value = "goods_candi")
    private String goodsCandi;


    /**
     * 详情
     */

    @TableField(value = "goods_content")
    private String goodsContent;


    /**
     * 创建时间
     */
    @JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat

    @TableField(value = "create_time")
    private Date createTime;


    /**
	 * 设置：主键
	 */
    public Integer getId() {
        return id;
    }


    /**
	 * 获取：主键
	 */

    public void setId(Integer id) {
        this.id = id;
    }
    /**
	 * 设置：展柜名称
	 */
    public String getGoodsName() {
        return goodsName;
    }


    /**
	 * 获取：展柜名称
	 */

    public void setGoodsName(String goodsName) {
        this.goodsName = goodsName;
    }
    /**
	 * 设置：展柜类型
	 */
    public Integer getGoodsTypes() {
        return goodsTypes;
    }


    /**
	 * 获取：展柜类型
	 */

    public void setGoodsTypes(Integer goodsTypes) {
        this.goodsTypes = goodsTypes;
    }
    /**
	 * 设置：展柜图片
	 */
    public String getGoodsPhoto() {
        return goodsPhoto;
    }


    /**
	 * 获取：展柜图片
	 */

    public void setGoodsPhoto(String goodsPhoto) {
        this.goodsPhoto = goodsPhoto;
    }
    /**
	 * 设置：品牌
	 */
    public String getGoodsPinpai() {
        return goodsPinpai;
    }


    /**
	 * 获取：品牌
	 */

    public void setGoodsPinpai(String goodsPinpai) {
        this.goodsPinpai = goodsPinpai;
    }
    /**
	 * 设置：价格
	 */
    public Double getGoodsNewMoney() {
        return goodsNewMoney;
    }


    /**
	 * 获取：价格
	 */

    public void setGoodsNewMoney(Double goodsNewMoney) {
        this.goodsNewMoney = goodsNewMoney;
    }
    /**
	 * 设置：材质
	 */
    public String getGoodsCaizhi() {
        return goodsCaizhi;
    }


    /**
	 * 获取：材质
	 */

    public void setGoodsCaizhi(String goodsCaizhi) {
        this.goodsCaizhi = goodsCaizhi;
    }
    /**
	 * 设置：附加功能
	 */
    public String getGoodsFujia() {
        return goodsFujia;
    }


    /**
	 * 获取：附加功能
	 */

    public void setGoodsFujia(String goodsFujia) {
        this.goodsFujia = goodsFujia;
    }
    /**
	 * 设置：产地
	 */
    public String getGoodsCandi() {
        return goodsCandi;
    }


    /**
	 * 获取：产地
	 */

    public void setGoodsCandi(String goodsCandi) {
        this.goodsCandi = goodsCandi;
    }
    /**
	 * 设置：详情
	 */
    public String getGoodsContent() {
        return goodsContent;
    }


    /**
	 * 获取：详情
	 */

    public void setGoodsContent(String goodsContent) {
        this.goodsContent = goodsContent;
    }
    /**
	 * 设置：创建时间
	 */
    public Date getCreateTime() {
        return createTime;
    }


    /**
	 * 获取：创建时间
	 */

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

}