<template>
  <!-- <a-table :columns="columns" :data-source="characters" /> -->
  <a-table
    :dataSource="characterQuotes"
    :columns="columns"
    :pagination="{ pageSize: 10 }"
    :loading="loading"
    @change="onChange"
  >
    <template #action="{ record }">
      <a @click="onDelete(record)">Delete</a>
    </template>
  </a-table>
</template>
<script>
//import apiClient from '../lib/apiClient'
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
      console.log('quote', quote)
      let action = {
        quote: quote.dialog,
        action: 'Borrar',
        fakeUrl: `DELETE /quotes/${quote._id}`
      }
      this.log ? JSON.parse(localStorage.getItem('logAction')) : []
      console.log('this.log', this.log)
      console.log('action', action)
      this.log.push(action)
      console.log('this.log after', this.log)
      localStorage.setItem('logAction', JSON.stringify(this.log))

    }
  },
};
</script>
