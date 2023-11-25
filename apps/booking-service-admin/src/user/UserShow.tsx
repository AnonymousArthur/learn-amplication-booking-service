import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { RESOURCE_TITLE_FIELD } from "../resource/ResourceTitle";
import { STOREENTITY_TITLE_FIELD } from "../storeEntity/StoreEntityTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="BookingOrder"
          target="id"
          label="BookingTransactions"
        >
          <Datagrid rowClick="show">
            <TextField label="BookingNo" source="bookingNo" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="Owner" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Resource"
              source="resource.id"
              reference="Resource"
            >
              <TextField source={RESOURCE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="StoreEntity"
              source="storeentity.id"
              reference="StoreEntity"
            >
              <TextField source={STOREENTITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="BookingOrder"
          target="id"
          label="BookingTransactions"
        >
          <Datagrid rowClick="show">
            <TextField label="BookingNo" source="bookingNo" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="Owner" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Resource"
              source="resource.id"
              reference="Resource"
            >
              <TextField source={RESOURCE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="StoreEntity"
              source="storeentity.id"
              reference="StoreEntity"
            >
              <TextField source={STOREENTITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StoreEntity"
          target="id"
          label="StoreEntities"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Location" source="location" />
            <TextField label="Name" source="name" />
            <ReferenceField label="Owner" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="StoreType" source="storeType" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
