import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { RESOURCE_TITLE_FIELD } from "../resource/ResourceTitle";
import { STOREENTITY_TITLE_FIELD } from "../storeEntity/StoreEntityTitle";

export const StoreResourceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
