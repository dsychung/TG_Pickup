<template>
      <button type="button" class="btn pt-2 pb-2 font-weight-bold mt-1 mr-1" v-if='itemList[item_key] && item' :class="[{'btn-primary':isActive},{'btn-secondary':!isActive},itemList[item_key].size,itemList[item_key].btnBlock]" @click="toggle" style="letter-spacing:1px">{{itemList[item_key].title}} : {{item}} </button>    
</template>

<script>
export default {
  name: "ItemButton",
  props: {
    item: {
    },
    item_key: {},
    index: {},
  },
  data() {
    return {
      isActive: false,
      itemList : {
        "其他食材 > 南非酸甜": {title:"南非酸甜", size:"btn-lg", btnBlock:""},  
        "其他食材 > 油蕃茄乾": {title:"油蕃茄乾", size:"btn-lg", btnBlock:""},  
        "其他食材 > 烤肉醬": {title:"烤肉醬", size:"btn-lg", btnBlock:""},   
        "其他食材 > 芥末豆子": {title:"芥末豆子", size:"btn-lg", btnBlock:""},  
        "其他食材 > 黑橄欖": {title:"黑橄欖", size:"btn-lg", btnBlock:""},   
        "包裝 > 12oz杯": {title:"12oz杯", size:"btn-lg", btnBlock:""},  
        "包裝 > 16oz杯": {title:"16oz杯", size:"btn-lg", btnBlock:""},   
        "包裝 > 三折單": {title:"三折單", size:"btn-lg", btnBlock:""},
        "包裝 > 二杯架": {title:"二杯架", size:"btn-lg", btnBlock:""},   
        "包裝 > 保鮮膜": {title:"保鮮膜", size:"btn-lg", btnBlock:""},
        "甜菜根": {title:"甜菜根", size:"btn-lg", btnBlock:""},
        "白雞": {title:"白雞", size:"btn-lg", btnBlock:"btn-block"},
        "筆麵": {title:"筆麵", size:"btn-lg", btnBlock:""},
        "糙米": {title:"糙米", size:"btn-lg", btnBlock:""},
        "糙米Mix": {title:"糙米Mix", size:"btn-lg", btnBlock:""},
        "牛肉": {title:"牛肉", size:"btn-lg", btnBlock:"btn-block"},
        "紅蘿蔔塊": {title:"紅蘿蔔塊", size:"btn-lg", btnBlock:""},
        "紫米": {title:"紫米", size:"btn-lg", btnBlock:""},
        "紫薯": {title:"紫薯", size:"btn-lg", btnBlock:""},
        "紫高麗": {title:"紫高麗", size:"btn-lg", btnBlock:""},
        "紫高麗_1": {title:"紫高麗_1", size:"btn-lg", btnBlock:""},
        "綠扁豆": {title:"綠扁豆", size:"btn-lg", btnBlock:""},
        "羽衣芥藍": {title:"羽衣芥藍", size:"btn-lg", btnBlock:""},
        "肯瓊烤雞": {title:"肯瓊烤雞", size:"btn-lg", btnBlock:""},
        "芝麻葉": {title:"芝麻葉", size:"btn-lg", btnBlock:""},
        "蒸南瓜": {title:"蒸南瓜", size:"btn-lg", btnBlock:""},
        "蒸地瓜": {title:"蒸地瓜", size:"btn-lg", btnBlock:""},
        "蔬菜肉類 > 培根": {title:"培根", size:"btn-lg", btnBlock:""},
        "蔬菜肉類 > 火腿": {title:"火腿", size:"btn-lg", btnBlock:""},
        "蔬菜肉類 > 炸雞": {title:"炸雞", size:"btn-lg", btnBlock:""},
        "蔬菜肉類 > 煙燻肉絲": {title:"煙燻肉絲", size:"btn-lg", btnBlock:""},
        "蔬菜肉類 > 蘿蔓葉": {title:"蘿蔓葉", size:"btn-lg", btnBlock:""},
        "藜麥": {title:"藜麥", size:"btn-lg", btnBlock:""},
        "藜麥150": {title:"藜麥150", size:"btn-lg", btnBlock:""},
        "蘿蔓丁": {title:"蘿蔓丁", size:"btn-lg", btnBlock:""},
        "調味醬料 > 椰奶": {title:"椰奶", size:"btn-lg", btnBlock:""},
        "調味醬料 > 濃縮番茄": {title:"濃縮番茄", size:"btn-lg", btnBlock:""},
        "調味醬料 > 酸豆": {title:"酸豆", size:"btn-lg", btnBlock:""},
        "豆豆": {title:"豆豆", size:"btn-lg", btnBlock:""},
        "豆豆Mix": {title:"豆豆Mix", size:"btn-lg", btnBlock:""},
        "綜合生菜": {title:"綜合生菜", size:"btn-lg", btnBlock:"btn-block"}
      }
    }
  },
  methods: {
    toggle() {
      //console.log('clicked');
      //console.log(this.isActive);
      this.isActive = this.isActive ? false : true;
    }   
  },
  created() {
  } 
};
</script>

<style scoped>
/*
Email 訂單
: 
"tg.banqiao@gmail.com"
Longitude
: 
""
User Agent
: 
"Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari Line/12.9.0"
備註
: 
"冷壓果汁(奇異果、甜菜根、羽衣甘藍)為客人訂購，請務必要來貨 謝謝🙏"
其他食材 > 南非酸甜
: 
""
其他食材 > 油蕃茄乾
: 
""
其他食材 > 烤肉醬
: 
""
其他食材 > 芥末豆子
: 
""
其他食材 > 黑橄欖
: 
""
包裝 > 12oz杯
: 
"1"
包裝 > 16oz杯
: 
"1"
包裝 > 三折單
: 
""
包裝 > 二杯架
: 
""
包裝 > 保鮮膜
: 
""
包裝 > 兩杯袋
: 
""
包裝 > 冰沙蓋
: 
""
包裝 > 加點杯
: 
""
包裝 > 四杯袋
: 
""
包裝 > 圓貼
: 
""
包裝 > 塑膠匙
: 
""
包裝 > 塑膠叉
: 
"3"
包裝 > 塑膠罐
: 
""
包裝 > 大垃圾袋
: 
""
包裝 > 封口貼
: 
""
包裝 > 小紙袋
: 
""
包裝 > 平杯蓋
: 
""
包裝 > 店名片
: 
""
包裝 > 微笑口罩
: 
""
包裝 > 手套L
: 
""
包裝 > 手套M
: 
""
包裝 > 手扒雞套
: 
"1"
包裝 > 提把牛皮袋
: 
""
包裝 > 摺疊盒中
: 
""
包裝 > 摺疊盒大
: 
""
包裝 > 擦手紙
: 
""
包裝 > 杯套
: 
""
包裝 > 標籤貼紙
: 
""
包裝 > 橡皮筋
: 
""
包裝 > 沙拉盒L
: 
"2"
包裝 > 沙拉盒M
: 
"2"
包裝 > 沙拉盒S
: 
"1"
包裝 > 波奇碗含蓋
: 
""
包裝 > 洗潔精
: 
""
包裝 > 淋膜紙
: 
""
包裝 > 湯碗
: 
"1"
包裝 > 湯蓋
: 
"1"
包裝 > 漂白水
: 
""
包裝 > 熱感紙
: 
""
包裝 > 熱杯蓋
: 
"1"
包裝 > 環保餐具
: 
""
包裝 > 腰封
: 
""
包裝 > 酒精
: 
""
包裝 > 醬料杯1oz
: 
"1"
包裝 > 醬料杯2oz
: 
""
包裝 > 鋁箔紙
: 
""
包裝 > 集點卡
: 
""
南瓜
: 
"1"
古斯Mix
: 
"2"
古斯米
: 
"6000"
四季豆
: 
"2"
大麥
: 
""
完成訂貨:
: 
"訂貨已完成"
寬扁麵
: 
"1"
店面
: 
"板橋"
建立
: 
"1662715217"
手動烤雞
: 
""
手動牛肉
: 
""
手動甜菜
: 
""
手動生菜
: 
""
手動白雞
: 
""
手動紫高
: 
""
手動羽衣
: 
""
手動蘿蔓
: 
""
手動調整
: 
""
手動麻葉
: 
""
手撕豬肉
: 
""
托斯Mix
: 
""
捲麵
: 
""
沙拉 > 健康糙人
: 
"2"
沙拉 > 凱薩大帝
: 
"8"
沙拉 > 南瓜古斯
: 
"2"
沙拉 > 希臘人
: 
""
沙拉 > 彩虹光橋
: 
"1"
沙拉 > 愛情瑞考
: 
"4"
沙拉 > 托斯卡尼
: 
""
沙拉 > 梅開富貴
: 
""
沙拉 > 正義聯盟
: 
"1"
沙拉 > 王者酪雞
: 
"5"
沙拉 > 王者鮭來
: 
"4"
沙拉 > 紫彩四季
: 
"2"
沙拉 > 紫朦朧
: 
""
沙拉 > 綠野仙蹤
: 
"1"
沙拉 > 芒果筋肉
: 
""
沙拉 > 菲達甜菜
: 
""
沙拉 > 蔬坊綠
: 
""
沙拉 > 豆豆俱樂
: 
"1"
沙拉 > 轟烤蔬菜
: 
"4"
沙拉 > 酥脆帕斯
: 
"3"
沙拉 > 酥脆雞肉
: 
"8"
沙拉 > 金槍酪梨
: 
"5"
沙拉 > 雪蓮甘藍
: 
""
沙拉 > 靈魂牛肉
: 
"8"
沙拉 > 青醬潘尼
: 
"3"
沙拉 > 風騷達利
: 
"2"
沙拉 > 香烤舒伯
: 
"4"
沙拉 > 麻葉莫札
: 
"8"
波奇 > 波奇烤雞
: 
""
波奇 > 波奇牛肉
: 
""
波奇 > 波奇白雞
: 
""
波奇 > 波奇紅地瓜
: 
""
烤蔬菜
: 
"4"
烤蔬菜Mix
: 
"4"
烤雞
: 
"5730"
烤青麥
: 
"1"
烤馬鈴薯
: 
"4"
熱湯 > 南瓜湯
: 
"1"
熱湯 > 牛肉湯
: 
"3"
熱湯 > 菠菜酪梨
: 
""
牛肉
: 
"6000"
甜菜根
: 
"2000"
白雞
: 
"8000"
筆麵
: 
"6"
糙米
: 
"3"
糙米Mix
: 
"2"
紅蘿蔔塊
: 
"4"
紫米
: 
""
紫薯
: 
"2"
紫高麗
: 
"500"
紫高麗_1
: 
""
綜合生菜
: 
"12300"
綠扁豆
: 
""
緯度
: 
""
羽衣芥藍
: 
"0"
肯瓊烤雞
: 
""
芝麻葉
: 
"3170"
蒸南瓜
: 
"2"
蒸地瓜
: 
"4"
蔬菜肉類 > 培根
: 
""
蔬菜肉類 > 火腿
: 
""
蔬菜肉類 > 炸雞
: 
""
蔬菜肉類 > 煙燻肉絲
: 
""
蔬菜肉類 > 蘿蔓葉
: 
"1"
藜麥
: 
"1"
藜麥150
: 
"2"
蘿蔓丁
: 
"5300"
訂單日期
: 
"2022-09-09"
調味醬料 > 椰奶
: 
""
調味醬料 > 濃縮番茄
: 
""
調味醬料 > 酸豆
: 
""
豆豆
: 
"1"
豆豆Mix
: 
"1"
輕食 > 三明_三倍起司
: 
""
輕食 > 三明_印度手撕
: 
""
輕食 > 三明_田園雞肉
: 
""
輕食 > 三明_霹靂烤雞
: 
""
輕食 > 可頌_南美烤雞
: 
"2"
輕食 > 可頌_火腿起司
: 
""
輕食 > 帕尼_南美烤雞
: 
"2"
輕食 > 帕尼_王者酪雞
: 
"0"
輕食 > 帕尼_西班牙臘
: 
""
輕食 > 帕尼_酥脆雞肉
: 
""
輕食 > 帕尼_金槍魚
: 
""
輕食 > 捲餅_南美烤雞
: 
"3"
輕食 > 捲餅_王者酪雞
: 
"0"
輕食 > 捲餅_酥脆雞肉
: 
""
輕食 > 法棍_培根酥脆
: 
""
輕食 > 法棍_酥脆雞肉
: 
"0"
輕食 > 法棍_靈魂牛肉
: 
"0"
醬料 > 富貴醬
: 
""
醬料 > 抹茶醬
: 
""
醬料 > 檸檬橄欖
: 
"3"
醬料 > 炸蝦醬
: 
""
醬料 > 石榴醬
: 
""
醬料 > 義式葡萄
: 
"1"
醬料 > 芝麻醬
: 
"0"
醬料 > 萊姆美乃
: 
"1"
醬料 > 蒜味蛋黃
: 
"1"
醬料 > 豆奶醬
: 
""
醬料 > 辣味美乃
: 
"1"
醬料 > 通粉醬
: 
"1"
醬料 > 鄉村優格
: 
"1"
醬料 > 霹靂辣醬
: 
""
雞豆
: 
"1"
飲品 > Orea碎片
: 
""
飲品 > 冷壓奇異果
: 
"1"
飲品 > 冷壓柳橙
: 
""
飲品 > 冷壓甜菜根
: 
"1"
飲品 > 冷壓羽衣
: 
"1"
飲品 > 咖啡豆
: 
""
飲品 > 唐寧伯爵
: 
""
飲品 > 唐寧早餐
: 
""
飲品 > 唐寧菊蜜
: 
""
飲品 > 唐寧蜜桃
: 
""
飲品 > 柳橙果汁
: 
""
飲品 > 檸檬果汁
: 
""
飲品 > 法氣泡飲
: 
""
飲品 > 紅茶
: 
""
飲品 > 綠茶
: 
""
飲品 > 葡柚果汁
: 
""
飲品 > 蔓越果汁
: 
""
飲品 > 鳳梨果汁
: 
""
餅皮起司 > 傑克起司
: 
""
餅皮起司 > 墨起司絲
: 
""
餅皮起司 > 瑞卡起司
: 
""
餅皮起司 > 紅切達
: 
""
餅皮起司 > 莫札乾酪
: 
""
餅皮起司 > 費達乾酪
: 
""
餅皮起司 > 餅皮10吋
: 
"2"
香腸
: 
"300"*/
</style>

