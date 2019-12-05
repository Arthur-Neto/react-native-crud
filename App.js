import PageCadastro from './src/features/clients/Cadastro';
import PagePesquisa from './src/features/clients/Pesquisa';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Cadastro: PageCadastro,
      Pesquisa: PagePesquisa,
    },
    {
      tabBarOptions: {
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 14,
          marginBottom: 15,
        },
      },
    }
  )
);

export default Routes;
