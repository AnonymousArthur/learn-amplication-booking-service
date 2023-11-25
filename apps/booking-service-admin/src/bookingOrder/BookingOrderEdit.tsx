import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { ResourceTitle } from "../resource/ResourceTitle";
import { StoreEntityTitle } from "../storeEntity/StoreEntityTitle";

export const BookingOrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="BookingNo" source="bookingNo" />
        <ReferenceInput
          source="createdBy.id"
          reference="User"
          label="Created By"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="owner.id" reference="User" label="Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="resource.id"
          reference="Resource"
          label="Resource"
        >
          <SelectInput optionText={ResourceTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="storeEntity.id"
          reference="StoreEntity"
          label="StoreEntity"
        >
          <SelectInput optionText={StoreEntityTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
