import { Menu } from "../../../domain/menu/menu.entity";
import { MenuRepositoryInterface } from "../../../domain/menu/menu.repository";

export class MenuMemoryRepository implements MenuRepositoryInterface {
  items: Menu[] = [];

  async insert(menu: Menu): Promise<void> {
    this.items.push(menu);
  }
}
