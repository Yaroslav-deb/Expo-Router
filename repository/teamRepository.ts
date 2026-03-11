import { db } from "../database/database";

export interface TeamItem {
  id: number;
  name: string;
  role: string;
  image: string;
}

export async function getAllTeamMembers(): Promise<TeamItem[]> {
  return await db.getAllAsync<TeamItem>(`SELECT * FROM team`);
}

export async function createTeamMember(name: string, role: string, image: string) {
  await db.runAsync(
    `INSERT INTO team (name, role, image) VALUES (?, ?, ?)`,
    [name, role, image]
  );
}

export async function updateTeamMember(id: number, name: string, role: string) {
  await db.runAsync(
    `UPDATE team SET name = ?, role = ? WHERE id = ?`,
    [name, role, id]
  );
}

export async function deleteTeamMember(id: number) {
  await db.runAsync(`DELETE FROM team WHERE id = ?`, [id]);
}