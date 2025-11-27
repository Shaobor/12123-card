# Shaobor 12123 Card

自定义 Lovelace 卡片，用于在 Home Assistant 中展示 12123 的驾驶证、车辆及违章信息。

## 功能
- 驾驶证：累计积分、证件状态、有效期、清分日期
- 车辆：支持多车，显示车牌号、类型、检验有效期、电子监控、状态
- 违章：行为、时间、地点、罚款、扣分，金额/分值采用醒目颜色
- Header 显示数据更新时间（HH:MM）

## 安装
### 通过 HACS 自定义仓库
1. Home Assistant → HACS → `Integrations`
2. 右上角 `···` → `Custom repositories`
3. 仓库地址填 `https://github.com/Shaobor/12123-card`，类别选择 `Lovelace`
4. 添加后搜索并安装 **Shaobor 12123 Card**
5. 在 Settings → Dashboards → Resources 添加：
   ```yaml
   url: /hacsfiles/12123-card/Shaobor_12123_card.js
   type: module
   ```

### 手动安装
1. 下载最新 release 内的 `Shaobor_12123_card.js`
2. 放入 `config/www/community/12123-card/`
3. 在资源中同样添加上述 JS 路径

## 使用
```yaml
type: custom:shaobor-12123-card
jiazheng_entity: sensor.xxx_jia_shi_zheng_xin_xi
cheliang_entity: sensor.xxx_che_liang_xin_xi
weizhang_entity: sensor.xxx_wei_zhang_xin_xi
```
也可以在可视化编辑器中直接通过实体选择器配置。

## 许可证
MIT
