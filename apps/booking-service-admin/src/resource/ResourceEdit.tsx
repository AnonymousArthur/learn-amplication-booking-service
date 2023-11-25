import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BookingOrderTitle } from "../bookingOrder/BookingOrderTitle";
import { StoreResourceTitle } from "../storeResource/StoreResourceTitle";

export const ResourceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
