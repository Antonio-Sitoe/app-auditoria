import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { cn } from "@/lib/utils"; // Assumindo que cn é uma função para combinar classes/estilos
import { ValideValue } from "@/utils/general";
import { MoveRight } from "lucide-react-native"; // Se houver um ícone equivalente no React Native
import { useRouter } from "expo-router";

// Componentes de layout e UI em React Native
// import { Skeleton } from "./Skeleton";

interface CardProps {
  className?: string;
  title: string;
  campaignId?: string;
  supervisorId?: string;
  footer?: React.ReactNode;
  routeParams?: string;
  isLoading: boolean;
  data?: {
    qty?: number;
    percentage?: number;
  };
  formated?: boolean;
}

export const CardModular = ({
  className,
  title,
  footer,
  campaignId,
  supervisorId,
  routeParams,
  data,
  isLoading,
  formated = false,
}: CardProps) => {
  const navigation = useRouter();

  if (isLoading) {
    return (
      <ActivityIndicator />
      // <Skeleton className={cn('h-40 sm:h-[180px] w-full rounded-3xl bg-lilag', className)} />
    );
  }

  return (
    <View
      className={cn(
        "grid w-full items-center rounded-3xl border border-red-600 bg-lilag pb-0 text-white",
        campaignId
          ? "grid-cols-columns-sm sm:grid-cols-columns"
          : "grid-cols-1",
        className,
      )}
    >
      <View className="grid items-center pl-0 pt-4">
        <View>
          <Text className="text-whites font-sans text-base font-medium sm:text-lg">
            {title}
          </Text>
          <Text className="flex items-center gap-2 font-sans text-xl font-bold sm:text-4xl">
            {formated ? data?.qty : ValideValue(data?.qty)}
            {data?.percentage && (
              <Text className="text-base">
                ({ValideValue(data.percentage)}%)
              </Text>
            )}
          </Text>
        </View>
        <View>
          {footer && (
            <Text className="text-sm font-semibold text-white sm:text-base">
              {footer}
            </Text>
          )}
        </View>
      </View>

      {campaignId && (
        <TouchableOpacity
          onPress={() => {
            // navigation.push("Dashboard", {
            //   campaignId,
            //   supervisorId,
            //   routeParams,
            //   bg: className,
            //   qty: data?.qty,
            //   title,
            // })
          }}
          className="flex h-full items-center justify-center rounded-r-3xl bg-dark-overlay px-5 hover:bg-[#00000064]"
        >
          <MoveRight size={30} className="text-red-600" />
        </TouchableOpacity>
      )}
    </View>
  );
};
