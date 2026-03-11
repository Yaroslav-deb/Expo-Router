import { getUserProfile } from '../apiUsers';

export class UserService {
  static async getUser(userId: number) {
    return await getUserProfile(userId);
  }

  static async getFormattedUserName(userId: number) {
    const user = await this.getUser(userId);
    if (!user) return 'Невідомий користувач';
    
    return `${user.name} (з міста ${user.address.city})`;
  }
}