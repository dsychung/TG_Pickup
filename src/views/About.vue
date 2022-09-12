<template>
  <div class="container">
      <div class="row">
        <div class="col-sm p-1">
          <div v-for="(record, key, index) in records" :key="key" :id="'item'+index" :record="record" :index="index" class="mb-5" >
            <h3>{{record['店面']}}</h3>
            <h5><strong>{{record['訂單日期']}}</strong><br/>
            {{record['備註']}}</h5>
            <div class="container mt-3">              
              <ItemButton v-for="(item, item_key, index) in record" :key="item_key" :item_key="item_key" :id="'item'+index"  :item="item"  :index="index" /><!--key word "key" is taken, so must give it a new specific name e.g. item_key-->
            </div>
            <small>{{record['Email 訂單']}}</small>
          </div>    
          <!--<ItemButton v-for="(item, i) in items" :button="button" type="button" :id="'item'+(i)" class="btn btn-lg btn-block pt-3 pb-3 font-weight-bold btn-secondary" @click="toggle(i)">{{item.title}} {{item.value}} /> -->
        </div>          
      </div> 
  </div>
</template>

<script>
import ItemButton from "@/components/ItemButton.vue";
import DataService from "@/services/DataServices.js";

export default {
  name: 'RecordList',
  components: {
    ItemButton
  },
  data() {
    return {
      /* demo databuttons: [{
            title: "item1",
            value: 1111
          },{
            title: "item2",
            value: 2222
          },{
            title: "item3",
            value: 333
          },{
            title: "item4",
            value: 444
          }]*/
      records: []
    }
  },
  created() {
    DataService.getData()
    .then(response => {
      this.records = response.data;
      //var the_data = response.data;
      // console.log(response.data);
       console.log(this.records);
      //console.log(the_data);
    })
    .catch(error => {
      console.log(error);
    })
  }
}
</script>

<style scoped>
</style>
