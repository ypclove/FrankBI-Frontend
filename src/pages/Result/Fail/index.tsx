import { GridContent } from '@ant-design/pro-components';
import { Card, Result } from 'antd';

export default () => {

  return (
    <GridContent>
      <Card bordered={false}>
        <Result
          status="error"
          title="付款失败"
          subTitle="请核对并修改信息后，再重新提交。"
          style={{
            marginTop: 48,
            marginBottom: 16,
          }}
        >
        </Result>
      </Card>
    </GridContent>
  );
};
