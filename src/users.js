import React from 'react';
import { List, Datagrid, TextField, EmailField,Edit,SimpleForm, TextInput } from 'react-admin';


export const UserEdit = props => (
    <Edit {...props}>
      <SimpleForm>
        {/* <DisabledInput source="id" /> */}
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="company.name" label="Institute" />
      </SimpleForm>
    </Edit>
  );
export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="company.name" label="Institute" />
        </Datagrid>
    </List>
);