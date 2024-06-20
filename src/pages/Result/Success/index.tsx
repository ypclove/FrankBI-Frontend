import { GridContent } from '@ant-design/pro-components';
import { Card, Result } from 'antd';

export default () => {
  return (
    <GridContent>
      <Card bordered={false}>
        <Result
          status="success"
          title="付款成功"
          subTitle="恭喜您，支付成功！"
          style={{
            marginBottom: 16,
          }}
        >
        </Result>
      </Card>
    </GridContent>
  );
};
