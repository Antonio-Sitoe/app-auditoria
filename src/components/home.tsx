import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";
import { getStaticsData } from "@/actions/server";
import { useAuth } from "@/contexts/AppContext";
import { formatNumber, ValideValue } from "@/utils/general";
import { CardModular } from "@/components/ui/card-modular/CardModular";
import ErrorBoundary from "./ui/error-boundary";

export function Statics({ campaignId = "sds" }) {
  // const { user } = useAuth();
  const supervisorId = "ddsds";
  const navigation = useNavigation();

  // const {
  //   data: response,
  //   isLoading,
  //   error,
  // } = useQuery(["statics", campaignId, supervisorId], () =>
  //   getStaticsData({ campaignId, supervisorId }),
  // );

  const data = true;
  const error = null;

  if (error) {
    return <ErrorBoundary error={error} />;
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <View className="bg-black">
        <CardModular
          isLoading={false}
          campaignId={campaignId}
          supervisorId={supervisorId}
          className="bg-lilag"
          title="Nº Produtores Registrados"
          routeParams="FARMER" // Substitua com o valor adequado para o Native Navigation
          data={{
            qty: 6,
          }}
        />
      </View>
      {/* 
      <View style={{ marginTop: 16, gap: 5 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 6 }}>
          Viveiros
        </Text>
        <View style={{ gap: 5 }}>
          <CardModular
            isLoading={isLoading}
            className="bg-green-accent"
            title="Nº Produtores C/ Dados Viveiros"
            campaignId={campaignId}
            supervisorId={supervisorId}
            routeParams="FARMERS_WITH_NURSERIES"
            data={data?.nurseries?.qtyFarmerWithData}
          />

          <CardModular
            isLoading={isLoading}
            title="Nº Produtores C/ Dados Insumos"
            className="bg-[#2D62ED]"
            campaignId={campaignId}
            supervisorId={supervisorId}
            routeParams="FARMERS_WITH_FARM_INPUT"
            data={data?.nurseries?.qtyFarmerWithFarmInputs}
          />

          <CardModular
            isLoading={isLoading}
            title="Nº Desistências"
            className="bg-lilag"
            data={data?.nurseries?.dropout}
          />
        </View>
      </View>

      <View style={{ marginTop: 16, gap: 5 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 6 }}>
          Plantação
        </Text>
        <View style={{ gap: 5 }}>
          <CardModular
            isLoading={isLoading}
            title="Nº Produtores C/ Plantas"
            className="bg-green-accent"
            campaignId={campaignId}
            supervisorId={supervisorId}
            routeParams="FARMERS_WITH_PLANTS"
            data={data?.plantation?.qtyFarmersPlanting}
            footer={`(${ValideValue(data?.plantation?.qtyFarmersPlanting.percentage)}% de ${data?.plantation.qtyFarmersPlanting.finishedNurseries} que terminaram viveiros)`}
          />

          <CardModular
            isLoading={isLoading}
            title="Nº Produtores C/ Insumos"
            className="bg-[#2D62ED]"
            campaignId={campaignId}
            supervisorId={supervisorId}
            routeParams="FARMERS_WITH_FARM_INPUTS_PLANTATION"
            data={data?.plantation?.qtyFarmersWithFarmInputs}
            footer={`(${ValideValue(data?.plantation.qtyFarmersWithFarmInputs.percentage)}% de ${data?.plantation.qtyFarmersWithFarmInputs.finishedNurseries} que terminaram viveiros)`}
          />

          <CardModular
            isLoading={isLoading}
            title="Nº Produtores C/ Secadores"
            className="bg-lilag"
            routeParams="FARMERS_WITH_FARM_INPUT"
            data={data?.plantation?.farmerProducersWith}
            footer={`(${ValideValue(data?.plantation?.farmerProducersWith?.percentage)}% de ${data?.plantation.farmerProducersWith.finishedNurseries} que terminaram viveiros)`}
          />
        </View>
      </View>

      <View style={{ marginTop: 16, gap: 5 }}>
        <CardModular
          isLoading={isLoading}
          title="Nº Total de Plantas"
          className="bg-green-accent"
          data={{ qty: data?.plantation?.totalPlants.qty }}
        />
        <CardModular
          isLoading={isLoading}
          title="NPK Entregue"
          className="bg-[#2D62ED]"
          formated
          data={{
            qty: `${formatNumber(data?.plantation?.npkBought.qty)} kg`,
          }}
        />
      </View>

      <View style={{ marginTop: 5, gap: 5 }}>
        <CardModular
          isLoading={isLoading}
          title="Nº Produtores que produziram"
          className="bg-green-accent"
          campaignId={campaignId}
          supervisorId={supervisorId}
          routeParams="FARMERS_HAS_SALES"
          data={{
            qty: data?.plantation.qtyFarmersWithSales,
          }}
        />
      </View> */}
    </ScrollView>
  );
}
