import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { GridContent } from '@ant-design/pro-components';
import { Button, Card, Result } from 'antd';
import { Fragment } from 'react';

export default () => {

  return (
    <GridContent>
      <Card bordered={false}>
        <Result
          status="error"
          title="提交失败"
          subTitle="请核对并修改以下信息后，再重新提交。"
          extra={
            <Button type="primary">
              <span>返回修改</span>
            </Button>
          }
          style={{
            marginTop: 48,
            marginBottom: 16,
          }}
        >
          {/* {Content} */}
        </Result>
      </Card>
    </GridContent>
  );
};
