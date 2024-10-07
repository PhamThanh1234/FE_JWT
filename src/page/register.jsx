import React from 'react';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import {createUserApi} from '../util/api'
import { useNavigate } from 'react-router-dom';
const RegisterPage = () => {
    const navigate = useNavigate();
    const onFinish  = async (values) => {
        const {name,email,password} = values;
        
        const res = await createUserApi(name,email,password);
        console.log('Success:', res);
        if(res){
            
            notification.success({
                message:"Creat usser",
                description: "User created successfully",
            })
            navigate('/login')
        }else{
            notification.error({
                message:"Creat usser",
                description: "User created failed",
            })
        }
        };
      
return (
  <div style={{margin:50}}>
      <Form
name="basic"
labelCol={{
span: 8,
}}
wrapperCol={{
span: 16,
}}
style={{
maxWidth: 600,
}}

onFinish={onFinish}

autoComplete="off"
layout='vertical'
>
<Form.Item
label="Email"
name="email"
rules={[
{
required: true,
message: 'Please input your username!',
},
]}
>
<Input />
</Form.Item>
<Form.Item
label="Password"
name="password"
rules={[
{
required: true,
message: 'Please input your password!',
},
]}
>
<Input.Password />
</Form.Item>
<Form.Item
label="Name"
name="name"
rules={[
{
required: true,
message: 'Please input your name!',
},
]}
>
<Input />
</Form.Item>
<Form.Item
>
<Button type="primary" htmlType="submit">
Submit
</Button>
</Form.Item>
</Form>
  </div>
)
};
export default RegisterPage;

