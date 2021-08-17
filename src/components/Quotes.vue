<template>
  <h3>Quotes</h3>
  <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
    <div :style="{ background: '#fff', padding: '24px', minHeight: '380px', marginTop: '64px' }">
  <a-table
    :dataSource="characterQuotes"
    :columns="columns"
    :pagination="{ pageSize: 10 }"
    :loading="loading"
    @change="onChange"
    :rowKey="record => record._id"
  >
    <template #action="{ record }">
      <a @click="onDelete(record)">Delete</a>
    </template>
  </a-table>
    </div>
  </a-layout-content>
</template>
<script>
import _ from 'lodash'


const getFilter = (arr, key) => Object.keys(_.groupBy(arr, n => n[key])).map(k => { return { text: k, value: k } })

export default {
  data: () => ({
    log: []
  }),
  props: {
    characterQuotes: []
  },
  computed: {
    columns () {
      return [
        {
          title: 'Movie',
          dataIndex: 'movie',
          filters: getFilter(this.characterQuotes, 'movie'),
          filterMultiple: false,
          onFilter: (value, record) => record.movie.indexOf(value) === 0,
          sorter: (a, b) => a.movie > b.movie ? 1 : -1,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Dialog',
          dataIndex: 'dialog',
          sorter: (a, b) => a.dialog > b.dialog ? 1 : -1,
          sortDirections: ['descend', 'ascend'],
        }, {
          title: 'Actions',
          dataIndex: 'action',
          slots: {
            customRender: 'action',
          },
        },
      ];
    },
  },
  methods: {
    onDelete (quote) {
      alert(`DELETE to: https://the-one-api.dev/v2/quotes/${quote._id}`)
      let date = new Date();
      let action = {
        quote: quote.dialog,
        action: 'Borrar',
        fakeUrl: `DELETE https://the-one-api.dev/v2/quotes/quotes/${quote._id}`,
        date: `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      }
      let oldData = JSON.parse(localStorage.getItem('logAction'))
      if(oldData === null){
        this.log.push(action)
      } else {
        this.log = oldData;
        this.log.push(action)
      }
      localStorage.setItem('logAction', JSON.stringify(this.log))

    }
  },
};
</script>
