import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

import { getGames } from '../api/api';

const TableListGamePage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesData = await getGames();
        setGames(gamesData);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);


  const columns = [
    {
      title: 'No',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Image',
      dataIndex: 'image_url',
      key: 'image',
      render: (text, record) => (
        <img src={text} alt={record.name} style={{ width: '50px', height: '50px' }} />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      key: 'genre',
    },
    {
      title: 'Platform',
      dataIndex: 'platform',
      key: 'platform',
    },
    {
      title: 'Release',
      dataIndex: 'release',
      key: 'release',
    },
    {
      // title: 'Actions',
      // key: 'actions',
      // render: ( record) => (
      //   <Space size="middle">
      //     <Link to={`/edit/${record.id}`}>
      //       <Button type="primary">Edit</Button>
      //     </Link>
      //     <Popconfirm
      //       title="Are you sure to delete this game?"
      //       onConfirm={() => handleDelete(record.id)}
      //       okText="Yes"
      //       cancelText="No"
      //     >
      //       <Button type="danger">Delete</Button>
      //     </Popconfirm>
      //   </Space>
      // ),
    },
  ];

  return (
    <div>
      <h2>Game List</h2>
      <Table dataSource={games} columns={columns} />
    </div>
  );
};

export default TableListGamePage;
