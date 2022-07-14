import { Menu } from "../../../domain/menu/menu.entity";
import { MenuRepositoryInterface } from "../../../domain/menu/menu.repository";

export class MenuMemoryRepository implements MenuRepositoryInterface {
  private items: Menu[] = [];

  async insert(menu: Menu): Promise<void> {
    this.items.push(menu);
  }

  async getAll(): Promise<Menu[]> {
    return this.items;
  }
}
