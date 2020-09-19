import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Upload, Modal, Form, Row, Col, Input, Button, Radio, DatePicker } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import SelectTags from '../common/host/SelectTags';
import HostEditor from '../common/host/HostEditor';
import CalendarForm from '../common/host/CalendarForm';


const Content = styled.div`
    flex: 0 1 50%;
    margin: 3% 0 3% 3%;
    border: 1px solid black;
    height: 100%;
`;

const HostToursCreateBlock = styled(Form)`
    font-size: 1rem;
    padding: 4%;
`;

const RowFirst = styled(Row)`
    height: 11vh;
`;

const RowWrapper = styled(Row)`
    margin-top: 3%;
`;

const ButtonWrapper = styled(Button)`
    font-size: 1rem;
    margin-top: -3%;
`;



const HostToursCreateForm = () => {

    function getBase64(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
      }
    
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([]);

    const handleCancel = () => {
        setPreviewVisible(false);
    };

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview)
        setPreviewVisible(true)
    };

    const handleChange = ({ fileList }) => {
        console.log(fileList)
        setFileList(fileList);
    }

    const uploadButton = (
      <div>
        <PlusOutlined />
        <div >사진 업로드</div><div style={{ fontSize: '0.7rem' }}>(최대 12장)</div>
      </div>
    );

    const customRequest = (e) => {
        e.preventDefault();
    }

    function onChange(e) {
        // if(e.target.checked = true){
        //     e.target.name = false
        // }
    
        console.log(`checked = ${e.target.value}`);
    }

    function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
    }
        


    
    
    return (
        <Content>
            <HostToursCreateBlock>

                <Row>
                <Col md={3}><label>상품명</label></Col>
                <Col md={20} offset={1}>
                    <Input
                    type="text"
                    required
                    name="name"
                    value={'제주 해녀 밥상'}
                    />
                </Col>
                </Row>

                <RowWrapper>
                    <Col md={3}><label>사진</label></Col>
                    <Col offset={1}>
                    <Upload
                    listType="picture-card"
                    fileList={fileList}
                    action= "mongodb://localhost:27017/blog" //URL 보내는 주소
                    onPreview={handlePreview}
                    onChange={handleChange}
                    multiple
                    >
                    {fileList.length >= 12 ? null : uploadButton}
                    </Upload>
                    <Modal
                    visible={previewVisible}
                    footer={null}
                    onCancel={handleCancel}
                    customRequest={customRequest}
                    >
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                    </Col>
                </RowWrapper>

                <RowWrapper>
                <Col md={3} style={{paddingTop:'10%'}}><label>가격</label></Col>
                <Col md={3} offset={1} style={{paddingTop:'10%'}}>
                    <Input
                    type="number"
                    required
                    style={{margin: 0}}
                    name="price"
                    value= {55000}
                    />
                </Col>
                <Col md={1} style={{paddingTop:'10%'}}><label style={{ verticalAlign: 'middle' }}>원</label></Col>
                <Col md={3} offset={5} style={{paddingTop:'10%'}}><label>판매기간</label></Col>
                <Col md={3} offset={2}>
                <CalendarForm />
                {/* 달력 */}
                </Col>
                </RowWrapper>

                <RowWrapper>
                    <Col md={3}><label>옵션</label></Col>
                    <Col md={18} offset={1}>
                        <Input 
                        required 
                        style={{ resize: 'none' }} 
                        placeholder="ex) 오후 7시 제주 해녀 밥상 (대인1)" 
                        />
                    </Col>
                    <Col md={1}><Button icon={<PlusOutlined />}></Button></Col>
                    <Col md={1}><Button icon={<MinusOutlined />}></Button></Col>
                </RowWrapper>

                <RowWrapper>
                    <Col md={3}><label>태그</label></Col>
                    <Col md={20} offset={1}>
                        <SelectTags />
                        {/* 태그 컴포넌트 */}
                    </Col>    
                </RowWrapper>


                <RowWrapper>
                <Col md={3}><label>소개</label></Col>
                            {/* 소개 컴포넌트 */}
                <Col md={20} offset={1}><HostEditor /></Col>
                </RowWrapper>

                <RowWrapper>
                    <Col md={3}><label>할인가능</label></Col>
                    <Col offset={1}>
                        <Radio.Group name="refund_type" onChange={onChange}>
                            <Radio value={'가능'}>가능</Radio>
                            <Radio value={'불가능'}>불가능</Radio>
                        </Radio.Group>
                    </Col>
                </RowWrapper>


                <Row style={{marginTop: '3%',justifyContent: 'center'}}>
                <Col><Link to="/host/tours"><Button>상품 등록</Button></Link></Col>
                </Row>
            </HostToursCreateBlock> 
        </Content>
    )
}

export default HostToursCreateForm;