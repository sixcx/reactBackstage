//远程加载数据
import React from 'react'
import { Table, Row, Col, Card, Icon, Button } from 'antd'
import { getTableRandom } from '../../api/table'

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  sorter: true,
  render: name => `${name.first} ${name.last}`,
  width: '20%',
}, {
  title: 'Gender',
  dataIndex: 'gender',
  filters: [
    { text: 'Male', value: 'male' },
    { text: 'Female', value: 'female' },
  ],
  width: '20%',
}, {
  title: 'Email',
  dataIndex: 'email',
}];

class AsyncTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pagination: {},
      loading: false
    }
  }

  componentDidMount () {
    this.fetch();
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize || 10,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }

  fetch = (params = {}) => {
    params.results = 10;
    this.setState({loading: true});
    getTableRandom(params).then((res) => {
      // console.log(res)
      const pagination = { ...this.state.pagination };
      pagination.total = 200;
      this.setState({
        loading: false,
        data: res.data.results,
        pagination
      });
    })
  }

  render () {
    return (
      <div>
        <Row gutter={24}>
          <Col span={24} md={24} className="row">
            <Card title="远程加载数据" bordered={false}>
              <Table 
                bordered
                columns={columns}
                rowKey={record => record.registered}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange}
              />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AsyncTable