import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { RESOURCE_TITLE_FIELD } from "../resource/ResourceTitle";
import { STOREENTITY_TITLE_FIELD } from "../storeEntity/StoreEntityTitle";

export const BookingOrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BookingTransactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="BookingNo" source="bookingNo" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Created By" source="user.id" reference="User">
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
    </List>
  );
};
