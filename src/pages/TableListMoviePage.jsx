import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Popconfirm, message } from 'antd';
import { Link } from 'react-router-dom';
import { getMovies, deleteMovie } from '../api/api';
import { useAuth } from '../context/AuthContext';  // Import the useAuth hook

const TableListMoviePage = () => {
  const [movies, setMovies] = useState([]);
  const { getAuthToken } = useAuth();  // Use the useAuth hook

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleDelete = async (id) => {
    try {
      const authToken = getAuthToken();  // Retrieve the authentication token

      if (!authToken) {
        throw new Error('Authorization Token not found');
      }

      await deleteMovie(id, authToken);
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
      message.success('Movie deleted successfully');
    } catch (error) {
      console.error('Error deleting movie:', error);
      message.error('Error deleting movie');
    }
  };

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
      render: (text, record) => <img src={text} alt={record.title} style={{ width: '50px', height: '50px' }} />,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      key: 'genre',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Link to={`/movies/edit/${record.id}`}>
            <Button type="primary">Edit</Button>
          </Link>
          <Popconfirm
            title="Are you sure to delete this movie?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger">Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h2>List of Movies</h2>
      <Table dataSource={movies} columns={columns} />
    </div>
  );
};

export default TableListMoviePage;
