import React, { useState } from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';

const SelectTags = () => {
    const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Select.Option key={i.toString(36) + i}>{i.toString(36) + i}</Select.Option>);
}


  function handleChange(value) {
    console.log(`selected ${value}`);
  }


    return (
        <div>
            <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="태그를 선택해주세요."
            onChange={handleChange}
            >
                  {children}
            </Select>
        </div>
    )
}

export default SelectTags;
