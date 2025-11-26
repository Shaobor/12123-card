# Shaobor 12123 Card

自定义 Lovelace 卡片，用于在 Home Assistant 中展示交管 12123 的驾驶证、车辆及违章信息。

## 功能
- 驾驶证累计积分、证件状态、有效期、清分日期
- 多辆车辆的车牌、类型、检验有效期、电子监控、状态
- 违章记录（行为、时间、地点、罚款、扣分）
- Header 显示数据更新时间

## 安装
### 通过 HACS 自定义仓库
1. 打开 Home Assistant → HACS → `Integrations`。
2. 右上角 ··· → `Custom repositories`。
3. 仓库地址填入 `https://github.com/Shaobor/12123-card`，类别选择 `Lovelace`。
4. 添加后在 HACS 中找到 `Shaobor 12123 Card` 并安装。HACS 会把文件下载到 `www/community/shaobor-12123-card`。
5. 通过资源管理（Settings → Dashboards → Resources）引入：
   ```yaml
   url: /hacsfiles/shaobor-12123-card/Shaobor_12123_card.js
   type: module
   ```

### 手动安装
1. 下载最新 release 中的 `Shaobor_12123_card.js`。 
2. 将文件放入 `config/www/community/shaobor-12123-card/`（或自己创建的目录）。
3. 同样在资源中添加上述 JS 路径。

## 使用
在 Lovelace 仪表板中添加以下卡片：
```yaml
type: custom:shaobor-12123-card
jiazheng_entity: sensor.xxx_jia_shi_zheng_xin_xi
cheliang_entity: sensor.xxx_che_liang_xin_xi
weizhang_entity: sensor.xxx_wei_zhang_xin_xi
```
在编辑器中也可以直接通过下拉框选择实体。

## 贡献
欢迎提 Issue / PR 改进样式、拓展字段。EOF
