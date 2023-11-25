import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RESOURCE_TITLE_FIELD } from "../resource/ResourceTitle";
import { STOREENTITY_TITLE_FIELD } from "../storeEntity/StoreEntityTitle";

export const StoreResourceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"StoreResources"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
