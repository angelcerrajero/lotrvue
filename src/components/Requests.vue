<template>
<div class="home" :style="{marginTop: '64px', paddingRight: '50px', paddingLeft: '50px'}">
  <a-table
    :dataSource="quotes"
    :columns="columns"
    :pagination="{ pageSize: 10 }"
    :loading="loading"
    @change="onChange"
    :row-selection="rowSelection"
    :rowKey="record => record.date"
  >
  </a-table>
</div>
</template>
<script>
import { mapActions } from 'vuex'
function onChange () {

}

export default {
  data: () => ({
    quotes: [],
  }),
  mounted() {
    const data = JSON.parse(localStorage.getItem('logAction'));
    this.quotes = data;
  },
  
  computed: {
    data() {
        return localStorage.getItem('logAction');
    },  
    columns () {
      return [
        {
          title: 'Quote',
          dataIndex: 'quote',
        },
        {
          title: 'Action',
          dataIndex: 'action',
        },
        {
          title: 'fakeUrl',
          dataIndex: 'fakeUrl',
        },
        {
          date: 'fakeUrl',
          dataIndex: 'date',
        },
      ];
    },
  },
  methods: {
    ...mapActions(['getCharactersByName']),
    onChange,
    getQuotesInfo (character) {
      this.$emit('characterSelection', character)
    },
    filterByName (value) {
      this.getCharactersByName(value)
    },
  },
};
</script>
