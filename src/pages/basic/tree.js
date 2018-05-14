//树
import React from 'react'
import { Row, Col, Tree, Card, Input } from 'antd'

import './index.less'

const TreeNode = Tree.TreeNode;
const Search = Input.Search;

const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

function generateTreeNodes(treeNode) {
  const arr = [];
  const key = treeNode.props.eventKey;
  for (let i = 0; i < 3; i++) {
    arr.push({ name: `leaf ${key}-${i}`, key: `${key}-${i}` });
  }
  return arr;
}

function setLeaf(treeData, curKey, level) {
  const loopLeaf = (data, lev) => {
    const l = lev - 1;
    data.forEach((item) => {
      if ((item.key.length > curKey.length) ? item.key.indexOf(curKey) !== 0 :
        curKey.indexOf(item.key) !== 0) {
        return;
      }
      if (item.children) {
        loopLeaf(item.children, l);
      } else if (l < 1) {
        item.isLeaf = true;
      }
    });
  };
  loopLeaf(treeData, level + 1);
}

function getNewTreeData(treeData, curKey, child, level) {
  const loop = (data) => {
    if (level < 1 || curKey.length - 3 > level * 2) return;
    data.forEach((item) => {
      if (curKey.indexOf(item.key) === 0) {
        if (item.children) {
          loop(item.children);
        } else {
          item.children = child;
        }
      }
    });
  };
  loop(treeData);
  setLeaf(treeData, curKey, level);
}

const dataList = [];
const generateList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const key = node.key;
    dataList.push({ key, title: key });
    if (node.children) {
      generateList(node.children, node.key);
    }
  }
};
generateList(gData);

const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};

class Trees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedKeys: [],
      autoExpandParent: true,
      checkedKeys: ['0-0-0'],
      selectedKeys: [],
      tData: gData,
      treeData: [],
      searchValue: '',
    }
  }

  componentDidMount () {
    // console.log(gData)
    setTimeout(() => {
      this.setState({
        treeData: [
          { name: 'pNode 01', key: '0-0' },
          { name: 'pNode 02', key: '0-1' },
          { name: 'pNode 03', key: '0-2', isLeaf: true },
        ],
      });
    }, 100);
  }

  onLoadData = (treeNode) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const treeData = [...this.state.treeData];
        getNewTreeData(treeData, treeNode.props.eventKey, generateTreeNodes(treeNode), 2);
        this.setState({ treeData });
        resolve();
      }, 1000);
    });
  }

  onExpand = (expandedKeys) => {
    this.setState({
      expandedKeys,
      autoExpandParent: false
    });
  }

  onCheck = (checkedKeys) => {
    this.setState({
      checkedKeys,
      selectedKeys: ['0-3', '0-4'],
    });
  }

  onSelect = (selectedKeys, info) => {
    this.setState({ selectedKeys });
  }

  onDrop = (info) => {
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const loop = (data, key, callback) => {
      data.forEach((item, index, arr) => {
        if (item.key === key) {
          return callback(item, index, arr);
        }
        if (item.children) {
          return loop(item.children, key, callback);
        }
      });
    };
    const data = [...this.state.tData];
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });
    if (info.dropToGap) {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      ar.splice(i, 0, dragObj);
    } else {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        item.children.push(dragObj);
      });
    }
    this.setState({
      tData: data,
    });
  }

  onChange = (e) => {
    const value = e.target.value;
    const expandedKeys = dataList.map((item) => {
      if (item.key.indexOf(value) > -1) {
        return getParentKey(item.key, gData);
      }
      return null;
    }).filter((item, i, self) => item && self.indexOf(item) === i);
    this.setState({
      expandedKeys,
      searchValue: value,
      autoExpandParent: true,
    });
  }

  render () {
    const { searchValue, expandedKeys, autoExpandParent } = this.state;
    const loops = data => data.map((item) => {
      const index = item.key.search(searchValue);
      const beforeStr = item.key.substr(0, index);
      const afterStr = item.key.substr(index + searchValue.length);
      const title = index > -1 ? (
        <span>
          {beforeStr}
          <span style={{ color: '#f50' }}>{searchValue}</span>
          {afterStr}
        </span>
      ) : <span>{item.key}</span>;
      if (item.children) {
        return (
          <TreeNode key={item.key} title={title}>
            {loops(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} title={title} />;
    });

    const loop = data => data.map((item) => {
      if (item.children) {
        return (
          <TreeNode key={item.key} title={item.key} isLeaf={item.isLeaf} disableCheckbox={item.key === '0-0-0'}>
            {loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} title={item.key} />;
    });

    const treeNodes = loop(this.state.treeData);

    return (
      <div>
        <Row gutter={24}>
          <Col span={12} className="row">
            <Card title="基本树形" bordered={false}>
              <Tree
                checkable
                defaultExpandedKeys={['0-0-0', '0-0-1']}
                defaultSelectedKeys={['0-0-0', '0-0-1']}
                defaultCheckedKeys={['0-0-0', '0-0-1']}
              >
                <TreeNode title="parent 1" key="0-0">
                  <TreeNode title="parent 1-0" key="0-0-0" disabled>
                    <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                    <TreeNode title="leaf" key="0-0-0-1" />
                  </TreeNode>
                  <TreeNode title="parent 1-1" key="0-0-1">
                    <TreeNode title={<span style={{ color: '#08c' }}>tree</span>} key="0-0-1-0" />
                  </TreeNode>
                </TreeNode>
              </Tree>
            </Card>
          </Col>
          <Col span={12} className="row">
            <Card title="受控树形" bordered={false}>
              <Tree
                checkable
                onExpand={this.onExpand} expandedKeys={this.state.expandedKeys}
                autoExpandParent={this.state.autoExpandParent}
                onCheck={this.onCheck} checkedKeys={this.state.checkedKeys}
                onSelect={this.onSelect} selectedKeys={this.state.selectedKeys}
              >
                {loop(gData)}
              </Tree>
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12} className="row">
            <Card title="可拖动树形" bordered={false}>
              <Tree
                className="draggable-tree"
                defaultExpandedKeys={this.state.expandedKeys}
                draggable
                onDragEnter={this.onDragEnter}
                onDrop={this.onDrop}
              >
                {loop(this.state.tData)}
              </Tree>
            </Card>
          </Col>
          <Col span={12} className="row">
            <Card title="异步加载树形" bordered={false}>
              <Tree loadData={this.onLoadData}>
                {treeNodes}
              </Tree>
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12} className="row">
            <Card title="可搜索树形" bordered={false}>
              <Search style={{ width: 300 }} placeholder="Search" onChange={this.onChange} />
              <Tree
                onExpand={this.onExpand}
                expandedKeys={expandedKeys}
                autoExpandParent={autoExpandParent}
              >
                {loops(gData)}
              </Tree>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Trees