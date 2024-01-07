import React, { useState } from 'react';
import { Button, Modal, Form, Input, Checkbox, DatePicker, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const AddGameModal = ({ visible, onCancel, onAddGame }) => {
  const [form] = Form.useForm();

  const handleAddGame = async () => {
    try {
      const values = await form.validateFields();
      onAddGame(values);
      form.resetFields();
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  return (
    <Modal
      title="Add Game"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="add" type="primary" onClick={handleAddGame}>
          Add
        </Button>,
      ]}
    >
      <Form form={form} labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
        <Form.Item
          label="Game Name"
          name="name"
          rules={[{ required: true, message: 'Please enter the game name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Release Date" name="release" rules={[{ required: true, message: 'Please select the release date!' }]}>
          <DatePicker />
        </Form.Item>
        <Form.Item label="Genre" name="genre" rules={[{ required: true, message: 'Please enter the genre!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Image URL" name="image_url" rules={[{ required: true, message: 'Please enter the image URL!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Platform" name="platform" rules={[{ required: true, message: 'Please enter the platform!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Single Player" name="singlePlayer" valuePropName="checked">
          <Checkbox />
        </Form.Item>
        <Form.Item label="Multiplayer" name="multiplayer" valuePropName="checked">
          <Checkbox />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddGameModal;
