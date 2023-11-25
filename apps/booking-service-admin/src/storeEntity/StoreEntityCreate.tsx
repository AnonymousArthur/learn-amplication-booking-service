import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BookingOrderTitle } from "../bookingOrder/BookingOrderTitle";
import { UserTitle } from "../user/UserTitle";
import { StoreResourceTitle } from "../storeResource/StoreResourceTitle";

export const StoreEntityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="bookingTransactions"
          reference="BookingOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingOrderTitle} />
        </ReferenceArrayInput>
        <TextInput label="Location" source="location" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="owner.id" reference="User" label="Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Opening", value: "opening" },
            { label: "Closed", value: "closed" },
            { label: "Renovating", value: "renovating" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="storeResources"
          reference="StoreResource"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StoreResourceTitle} />
        </ReferenceArrayInput>
        <TextInput label="StoreType" source="storeType" />
      </SimpleForm>
    </Create>
  );
};
