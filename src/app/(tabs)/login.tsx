import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import Loginsvg from "@/assets/logo.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { BaseToast } from "react-native-toast-message"; // Usando uma biblioteca diferente para toast em React Native
import { Card } from "@/components/ui/card";
import { Input, InputField } from "@/components/ui/input";

const schema = z.object({
  email: z.string().min(1, "E-mail ou número de telefone é obrigatório"),
  password: z
    .string()
    .min(1, "Senha é obrigatória")
    .max(70, "Digite uma senha"),
});

function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    setIsSubmitting(true);
    try {
      // Simulação de login
      const data = await fakeSignIn(values.email, values.password);
      if (data.error) {
        // toast.show({
        //   type: 'error',
        //   text1: 'Falha ao autenticar',
        //   text2: data.errorMessage,
        // })
      } else {
        // Navegação
        // Na prática, use um método de navegação como React Navigation
        console.log("Login successful, navigate to dashboard");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <View className="bg-primary flex-1 items-center justify-center p-4">
      <Card className="w-full max-w-md rounded-lg bg-white">
        <Loginsvg />
        {/* <Image
          source={{ uri: require("../../assets/logo.svg") }}
          style={{
            width: 100,
            height: 100,
            alignSelf: "center",
            marginBottom: 20,
          }}
        /> */}
        <Text className="text-primary mb-4 text-center text-lg">
          Introduza seus dados abaixo para entrar
        </Text>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <View className="mb-4">
              <Text>Email ou número de telefone</Text>
              <Input
                variant="outline"
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <InputField
                  {...field}
                  className="rounded border border-gray-300 p-2"
                  placeholder="Seu e-mail ou telefone"
                />
              </Input>
              {errors.email && (
                <Text className="text-red-500">{errors.email.message}</Text>
              )}
            </View>
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <View className="mb-4">
              <Text>Senha</Text>
              <Input
                variant="outline"
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <InputField
                  {...field}
                  className="rounded border border-gray-300 p-2"
                  placeholder="********"
                  secureTextEntry
                />
              </Input>
              {errors.password && (
                <Text className="text-red-500">{errors.password.message}</Text>
              )}
            </View>
          )}
        />
        <TouchableOpacity
          className="rounded bg-blue-500 p-4"
          onPress={handleSubmit(onSubmit)}
          disabled={isSubmitting}
        >
          <Text className="text-center text-white">
            {isSubmitting ? <ActivityIndicator color="#fff" /> : "Entrar"}
          </Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

async function fakeSignIn(email, password) {
  // Simulação de uma função de login
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "test@example.com" && password === "password") {
        resolve({ error: null });
      } else {
        resolve({ error: true, errorMessage: "Credenciais inválidas" });
      }
    }, 1000);
  });
}

export default Login;
