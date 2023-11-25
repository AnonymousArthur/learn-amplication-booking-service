import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { RESOURCE_TITLE_FIELD } from "../resource/ResourceTitle";
import { STOREENTITY_TITLE_FIELD } from "../storeEntity/StoreEntityTitle";

export const BookingOrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
