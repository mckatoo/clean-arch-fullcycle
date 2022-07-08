import { Menu, MenuProps } from "../../../domain/menu/menu.entity";
import { MenuMemoryRepository } from "./menu-memory.repository";

describe("Menu in Memory Repository", () => {
  it("should insert a new menu", async () => {
    const repository = new MenuMemoryRepository();
    const menuData: MenuProps = {
      label: "label to link",
      to: "url"
    };
    const menu = new Menu(menuData);
    expect(repository.items).toHaveLength(0);

    await repository.insert(menu);
    expect(repository.items).toHaveLength(1);
    expect(repository.items).toStrictEqual([menu]);
  });
});
