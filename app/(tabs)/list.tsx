import { useState, useEffect } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { globalStyles } from '../../styles/global';
import { listStyles } from '../../styles/lists';
import { TeamItem, getAllTeamMembers } from "../../repository/teamRepository";

const renderItem = ({ item }: { item: TeamItem }) => (
  <View style={[listStyles.card, listStyles.row]}>
    <Image source={{ uri: item.image }} style={listStyles.smallAvatar} />
    <View>
      <Text style={listStyles.cardTitle}>{item.name}</Text>
      <Text style={listStyles.cardSubtitle}>{item.role}</Text>
    </View>
  </View>
);

export default function ListScreen() {
  const [data, setData] = useState<TeamItem[]>([]);

  useEffect(() => {
    async function loadData() {
      const dbData = await getAllTeamMembers();
      setData(dbData);
    }
    loadData();
  }, []);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={listStyles.listContainer}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        ListHeaderComponent={() => <Text style={globalStyles.titleText}>Команда проєкту</Text>}
        ListEmptyComponent={() => <Text style={globalStyles.titleText}>Список порожній</Text>}
      />
    </View>
  );
}