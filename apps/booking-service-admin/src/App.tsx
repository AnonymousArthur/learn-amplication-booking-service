import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { BookingOrderList } from "./bookingOrder/BookingOrderList";
import { BookingOrderCreate } from "./bookingOrder/BookingOrderCreate";
import { BookingOrderEdit } from "./bookingOrder/BookingOrderEdit";
import { BookingOrderShow } from "./bookingOrder/BookingOrderShow";
import { ResourceList } from "./resource/ResourceList";
import { ResourceCreate } from "./resource/ResourceCreate";
import { ResourceEdit } from "./resource/ResourceEdit";
import { ResourceShow } from "./resource/ResourceShow";
import { StoreEntityList } from "./storeEntity/StoreEntityList";
import { StoreEntityCreate } from "./storeEntity/StoreEntityCreate";
import { StoreEntityEdit } from "./storeEntity/StoreEntityEdit";
import { StoreEntityShow } from "./storeEntity/StoreEntityShow";
import { StoreResourceList } from "./storeResource/StoreResourceList";
import { StoreResourceCreate } from "./storeResource/StoreResourceCreate";
import { StoreResourceEdit } from "./storeResource/StoreResourceEdit";
import { StoreResourceShow } from "./storeResource/StoreResourceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Booking Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="BookingOrder"
          list={BookingOrderList}
          edit={BookingOrderEdit}
          create={BookingOrderCreate}
          show={BookingOrderShow}
        />
        <Resource
          name="Resource"
          list={ResourceList}
          edit={ResourceEdit}
          create={ResourceCreate}
          show={ResourceShow}
        />
        <Resource
          name="StoreEntity"
          list={StoreEntityList}
          edit={StoreEntityEdit}
          create={StoreEntityCreate}
          show={StoreEntityShow}
        />
        <Resource
          name="StoreResource"
          list={StoreResourceList}
          edit={StoreResourceEdit}
          create={StoreResourceCreate}
          show={StoreResourceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
