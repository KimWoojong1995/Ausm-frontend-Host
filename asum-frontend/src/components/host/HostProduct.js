import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { List, Button } from 'antd';
import { DeleteOutlined, EyeInvisibleOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Content = styled.div`
    flex: 0 1 50%;
    margin: 3% 0 3% 3%;
    border: 1px solid black;
    height: 100%;
`;

const HostProductBlock = styled.div`
    font-size: 1rem;
    padding: 4%
`;

const HostInquiry = () => {
    const listData = []; //들어오는 데이터 넣으면 됨
        for (let i = 0; i < 23; i++) {  //i 는 등록된 게시글 갯수이므로 i < 23은 게시물 올린거 length로 변경예정
        listData.push({
            href: 'https://ant.design',
            title: `ant design part ${i}`,
            description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        });
        }

    return (
        <Content>
        <HostProductBlock>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                onChange: page => { 
                    console.log(page); //페이지 이동할때마다 콘솔 로그로 알려줌
                },
                pageSize: 3, //한페이지에 몇개?
                }}
                dataSource={listData} //데이터소스에 대입하면 밑에부턴 item.???로 시작하게 된다
                footer={
                <div style={{ textAlign: 'center' }}>
                    <Link to="/"><Button>새로운 상품 등록하기</Button></Link>
                </div>
                }
                renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[  //onClick 넣어주고 이동시키기
                    <EditOutlined key="수정" />,
                    <EyeInvisibleOutlined key="가리기" />,
                    <DeleteOutlined key="삭제" />,
                    ]}
                    extra={
                    <img
                        width={272}
                        height={180}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                    }
                >
                    <List.Item.Meta
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                    />
                    {item.content}
                </List.Item>
                )}
            />
        </HostProductBlock>
        </Content>
    )
}

export default HostInquiry;