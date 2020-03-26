import React from 'react';

import { Card } from 'antd';
import { string, number } from 'prop-types';

const { Meta } = Card;

const MovieItem = ({ title, url, year }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  )
}

MovieItem.protoTypes = {
  title: string,
  url: string,
  year: number,
};

MovieItem.defaultProps = {
  title: '',
  url: '',
  year: 1900,
};


export default MovieItem;