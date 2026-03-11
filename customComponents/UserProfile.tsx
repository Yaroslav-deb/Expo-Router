import { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/global';
import { UserService } from '../api/services/UserService';

export const UserProfile = ({ userId }: { userId: number }) => {
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const formattedName = await UserService.getFormattedUserName(userId);
        setUserName(formattedName);
      } catch (error) {
        console.error("Помилка при завантаженні імені користувача:", error);
        setUserName("Помилка завантаження");
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [userId]);

  if (loading) {
    return <ActivityIndicator size="small" color="#0000ff" style={{ margin: 20 }} />;
  }

  return (
    <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10, borderWidth: 1, borderColor: '#ddd', marginTop: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Привіт, {userName}!</Text>
      <Text style={{ fontSize: 14, color: '#666' }}>Ваш ID: {userId}</Text>
    </View>
  );
};