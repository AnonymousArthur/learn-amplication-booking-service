import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ResourceTitle } from "../resource/ResourceTitle";
import { StoreEntityTitle } from "../storeEntity/StoreEntityTitle";

export const StoreResourceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="resource.id"
          reference="Resource"
          label="Resource"
        >
          <SelectInput optionText={ResourceTitle} />
        </ReferenceInput>
        <TextInput label="Stock" source="stock" />
        <ReferenceInput
          source="storeEntity.id"
          reference="StoreEntity"
          label="StoreEntity"
        >
          <SelectInput optionText={StoreEntityTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
