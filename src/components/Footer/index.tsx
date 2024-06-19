import { BLOG_LINK, WELCOME } from '@/constants';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const defaultMessage = 'Frank出品';
  const currentYear = new Date().getFullYear();
  const beian = '桂ICP备2023002099号';
  const beianUrl = 'https://beian.miit.gov.cn/#/Integrated/index';
  return (
    <DefaultFooter
      style={{
        background: 'none'
      }}
      // @ts-ignore
      copyright={
        <>
          {currentYear} {defaultMessage} |{'  '}
          <a href={beianUrl} target="_blank" rel="noreferrer">
            {beian}
          </a>
        </>
      }
      links={[
        {
          key: '欢迎访问我的Github',
          title: '欢迎访问我的Github',
          href: WELCOME,
          blankTarget: true
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ypclove',
          blankTarget: true
        },
        {
          key: 'Frank Blog',
          title: 'Frank Blog',
          href: BLOG_LINK,
          blankTarget: true
        }
      ]}
    />
  );
};
export default Footer;
