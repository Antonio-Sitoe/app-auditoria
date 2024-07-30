import React from "react";
import { View, Text, Pressable } from "react-native";
import { errorTransformer } from "@/lib/error";
import { useRouter } from "expo-router";

export default function ErrorBoundary({
  message,
  error,
}: {
  message?: string;
  error?: unknown;
}) {
  const router = useRouter();

  const customMessage = message || errorTransformer(error).message;

  return (
    <View className="bg-background flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <View className="w-full max-w-md text-center">
        <Text className="text-foreground mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Oops, algo deu errado!
        </Text>
        <Text className="text-muted-foreground mt-4">{customMessage}</Text>
        <View className="mt-6">
          <Pressable
            onPress={() => router.back()}
            className="bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary inline-flex items-center rounded-md px-4 py-2 text-sm font-medium shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            <Text className="text-primary-foreground text-sm font-medium">
              Voltar à página inicial
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
