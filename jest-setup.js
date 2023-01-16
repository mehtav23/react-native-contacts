// import 'react-native-gesture-handler/jestSetup';

//jest.mock('NativeAnimatedHelper');
// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
// jest.mock('react-native');

// jest.mock('react-native-reanimated', () => {
//   const Reanimated = require('react-native-reanimated/mock');

//   // The mock for `call` immediately calls the callback which is incorrect
//   // So we override it with a no-op
//   Reanimated.default.call = () => {};

//   return Reanimated;
// });

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
// jest.mock('NativeAnimatedHelp');

// import {FontAwesome, MaterialIcons, IoniIcons} from "react-native-vector-icons";

// mocking the vector icons
jest.mock('@expo/vector-icons', () => {
  const icons = {
    __esModule: true,
  };

  const handler = {
    get: function (_, prop) {
      return () => <div className={`mock_${prop}Icon`} />;
    },
  };

  return new Proxy(icons, handler);
});

// jest.mock("react-navigation", () => ({
//   withNavigation: (Component) => (props) =>
//     <Component navigation={{ navigate: jest.fn() }} {...props} />,
// }));
// afterAll(() => {
//   jest.restoreAllMocks();
// });
