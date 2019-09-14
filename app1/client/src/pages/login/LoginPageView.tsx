import React from "react";
import {Form} from "antd";
import FormItem from "antd/lib/form/FormItem";
import Input from "antd/lib/input";
import Button from "antd/lib/button";

export default class LoginPageView extends React.Component{

    render() {
        return (
            <div>
                <h1>This is LoginPageView</h1>
                <hr/>
                <Form>
                    <FormItem label="Email">
                        <Input name="email"/>
                    </FormItem>
                    <FormItem label="Password">
                        <Input name="password"/>
                    </FormItem>
                    <FormItem>
                        <Button>Login</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
