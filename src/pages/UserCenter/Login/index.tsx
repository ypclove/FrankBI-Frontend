import Footer from '@/components/Footer';
import { SYSTEM_LOGO } from '@/constants';
import { getLoginUserUsingGet, userLoginUsingPost } from '@/services/FrankBI/userController';
import { Link } from '@@/exports';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { ProFormText } from '@ant-design/pro-components';
import { LoginFormPage } from '@ant-design/pro-form/lib';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { Helmet, history, useModel } from '@umijs/max';
import { Button, Tabs, message } from 'antd';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import Settings from '../../../../config/defaultSettings';

const Login: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const { setInitialState } = useModel('@@initialState');
  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%'
    };
  });
  const fetchUserInfo = async () => {
    const userInfo = await getLoginUserUsingGet();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s): any => ({
          ...s,
          currentUser: userInfo
        }));
      });
    }
  };
  const handleSubmit = async (values: API.UserLoginRequest) => {
    try {
      // 登录
      const res = await userLoginUsingPost(values);

      if (res.code === 0) {
        const defaultLoginSuccessMessage = '登录成功！';
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        location.reload();
        return;
      } else {
        message.error(res.message);
      }
    } catch (error) {
      const defaultLoginFailureMessage = '登录失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };
  return (
    <>
      <div className={containerClassName}>
        <Helmet>
          {'登录'}- {Settings.title}
        </Helmet>
        <div
          style={{
            backgroundRepeat: 'no-repeat',
            width: '68%',
            height: '100%'
          }}
        >
          <LoginFormPage
            logo={<img alt="logo" src={SYSTEM_LOGO} />}
            title="智能 BI 数据分析平台"
            submitter={{
              searchConfig: {
                submitText: '登录'
              }
            }}
            onFinish={async (values) => {
              await handleSubmit(values as API.UserLoginRequest);
            }}
          >
            <Tabs
              activeKey={type}
              onChange={setType}
              centered
              items={[
                {
                  key: 'account',
                  label: '账户密码登录'
                }
              ]}
            />
            {type === 'account' && (
              <>
                <ProFormText
                  name="userAccount"
                  fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined />
                  }}
                  placeholder={'请输入账户名'}
                  rules={[
                    {
                      required: true,
                      message: '账户名是必填项！'
                    }
                  ]}
                />
                <ProFormText.Password
                  name="userPassword"
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined />
                  }}
                  placeholder={'请输入密码'}
                  rules={[
                    {
                      required: true,
                      message: '密码是必填项！'
                    }
                  ]}
                />
              </>
            )}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <Link to="/user/register">
                <Button type="primary" block style={{ height: '40px' }}>
                  注册
                </Button>
              </Link>
            </div>
          </LoginFormPage>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Login;
