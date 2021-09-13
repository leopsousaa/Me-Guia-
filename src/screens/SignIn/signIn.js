import React from "react";
import { Text, Button } from "react-native";

// import { AuthContext } from "../../context/authContext";

import ScreenContainer from "../../components/ScreenContainer";

const SignIn = ({ navigation }) => {
  // const { signIn } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => { }} />
      <Button
        title="Create Account"
        onPress={() => { }}
      />
    </ScreenContainer>
  );
};

export default SignIn;
