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

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { RESOURCE_TITLE_FIELD } from "./ResourceTitle";
import { STOREENTITY_TITLE_FIELD } from "../storeEntity/StoreEntityTitle";

export const ResourceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Manufacturer" source="manufacturer" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Vendor" source="vendor" />
        <ReferenceManyField
          reference="BookingOrder"
          target="resourceId"
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
          reference="StoreResource"
          target="resourceId"
          label="StoreResources"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Resource"
              source="resource.id"
              reference="Resource"
            >
              <TextField source={RESOURCE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Stock" source="stock" />
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
      </SimpleShowLayout>
    </Show>
  );
};
