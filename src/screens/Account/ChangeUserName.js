import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import { getMeApi, updateUserApi } from "../../api/user";
import useAuth from "../../hooks/useAuth";
import { useFormik } from "formik";
import * as Yup from "yup";

import { formStyles } from "../../styles";

export default function ChangeUserName() {
  const [loading, setLoading] = useState(false);
  const { auth } = useAuth();
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getMeApi(auth.token);
        await formik.setFieldValue("username", response.username);
      })();
    }, [])
  );

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      try {
        const response = await updateUserApi(auth, formData);
        if (response.statusCode) throw "El nombre de usuario ya existe";
        navigation.goBack();
      } catch (e) {
        Toast.show(e, { position: Toast.positions.CENTER });
        formik.setFieldError("username", true);
        setLoading(false);
      }
    },
  });

  return (
    <View style={styles.content}>
      <TextInput
        style={formStyles.input}
        label="Nombre de usuario"
        onChangeText={(text) => formik.setFieldValue("username", text)}
        value={formik.values.username}
        error={formik.errors.username}
      />
      <Button
        mode="contained"
        style={formStyles.btnSuccess}
        loading={loading}
        onPress={formik.handleSubmit}
      >
        Cambiar nombre de usuario
      </Button>
    </View>
  );
}

function initialValues() {
  return {
    username: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().min(4, true).required(true),
  };
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
});
