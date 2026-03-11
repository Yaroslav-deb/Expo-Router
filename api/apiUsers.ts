import { apiUsers } from './init';

export async function getUserProfile(userId: number) {
  const response = await apiUsers.get(`/${userId}`);
  return response.data;
}