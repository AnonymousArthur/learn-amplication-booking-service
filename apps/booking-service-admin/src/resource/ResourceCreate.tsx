import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BookingOrderTitle } from "../bookingOrder/BookingOrderTitle";
import { StoreResourceTitle } from "../storeResource/StoreResourceTitle";

export const ResourceCreate = (props: CreateProps): React.ReactElement => {
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
        <TextInput label="Manufacturer" source="manufacturer" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="storeResources"
          reference="StoreResource"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StoreResourceTitle} />
        </ReferenceArrayInput>
        <TextInput label="Vendor" source="vendor" />
      </SimpleForm>
    </Create>
  );
};
