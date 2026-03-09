import { FlatList, Image, Text, View } from "react-native";
import { globalStyles } from '../../styles/global';
import { listStyles } from '../../styles/lists';

const TEAM_DATA = [
  { id: '1', name: 'Кузін Богдан', role: 'Дизайнер', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '2', name: 'Панченко Ярослав', role: 'Розробник', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '3', name: 'Владислав Коваль', role: 'Менеджер', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '4', name: 'Нижегольцев Владислав', role: 'Аналітик', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '5', name: 'Анна Лисенко', role: 'HR', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '6', name: 'Максим Чумак', role: 'Тестувальник', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '7', name: 'Дмитро Ткач', role: 'DevOps', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '8', name: 'Юлія Шевченко', role: 'Копірайтер', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '9', name: 'Андрій Бойко', role: 'SEO Спеціаліст', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '10', name: 'Вікторія Мороз', role: 'Маркетолог', image: 'https://reactnative.dev/img/tiny_logo.png' },
];

interface UserItem {
  id: string;
  image: string;
  name: string;
  role: string;
}

const renderItem = ({ item }: { item: UserItem }) => (
  <View style={[listStyles.card, listStyles.row]}>
    <Image source={{ uri: item.image }} style={listStyles.smallAvatar} />
    <View>
      <Text style={listStyles.cardTitle}>{item.name}</Text>
      <Text style={listStyles.cardSubtitle}>{item.role}</Text>
    </View>
  </View>
);

export default function ListScreen() {
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={TEAM_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={listStyles.listContainer}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        ListHeaderComponent={() => <Text style={globalStyles.titleText}>Команда проєкту</Text>}
        ListEmptyComponent={() => <Text style={globalStyles.titleText}>Список порожній</Text>}
      />
    </View>
  );
}