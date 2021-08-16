<template>
  <a-input-search
    placeholder="Search by name"
    @search="filterByName"
    allowClear
  ></a-input-search>
  <a-table
    :dataSource="characters"
    :columns="columns"
    :pagination="{ pageSize: 10 }"
    :loading="loading"
    @change="onChange"
    :row-selection="rowSelection"
  >
  </a-table>
</template>
<script>
//import apiClient from '../lib/apiClient'
import _ from 'lodash'
import { mapActions, mapState } from 'vuex'
function onChange (pagination, filters, sorter) {
  console.log('params', pagination);
  console.log('params', pagination, filters, sorter);
}

const getFilter = (arr, key) => Object.keys(_.groupBy(arr, n => n[key])).map(k => { return { text: k, value: k } })

export default {
  data: () => ({
    text: ""
  }),

  computed: {
    ...mapState(['characters']),
    columns () {
      return [
        {
          title: 'Name',
          dataIndex: 'name',
          onFilter: (value, record) => record.name.indexOf(value) === 0,
          sorter: (a, b) => a.name.length > b.name.length ? 1 : -1,
          sortDirections: ['descend'],
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          filters: getFilter(this.characters, 'gender'),
          filterMultiple: true,
          onFilter: (value, record) => record.gender?.indexOf(value) === 0,
          sorter: (a, b) => a.gender > b.gender ? 1 : -1,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Birth',
          dataIndex: 'age',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.age - b.age,
        },
        {
          title: 'Death',
          dataIndex: 'death',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.death - b.death,
        },
        {
          title: 'Race',
          dataIndex: 'race',
          filters: getFilter(this.characters, 'race'),
          filterMultiple: true,
          onFilter: (value, record) => record.race?.indexOf(value) === 0,
          sorter: (a, b) => a.race > b.race ? 1 : -1,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Hair',
          dataIndex: 'hair',
        },
        {
          title: 'Height',
          dataIndex: 'height',
        },
        {
          title: 'Realm',
          dataIndex: 'realm',
        },
        {
          title: 'House',
          dataIndex: 'house',
        },
      ];
    },
    rowSelection () {
      return {
        onSelect: (record, selected) => {
          this.getQuotesInfo(selected ? record._id : undefined);
        },
      }
    }
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
