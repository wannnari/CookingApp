import React, { useState } from "react";

const BuyingList: React.FC = () => {
  type Item = {
    id: number;
    itemName: string;
    isChecked: boolean;
  };

  const [inputItem, setInputItem] = useState<string>("");
  const [items, setItems] = useState<Item[]>([]);

  // リストに追加処理
  const handleAddItem = () => {
    if (inputItem.trim() != "") {
      const newItem: Item = {
        id: Date.now(),
        itemName: inputItem,
        isChecked: false,
      };
      setItems([...items, newItem]);
      setInputItem("");
    }
  };

  // リスト削除処理
  const handleDeleteItem = () => {
    setItems(items.filter((item) => !item.isChecked));
  };

  // チェックボックス反映処理
  const toggeleItem = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <div>
      <div id="buying">買い物リスト</div>
      <input
        type="text"
        value={inputItem}
        onChange={(e) => setInputItem(e.target.value)}
      />
      <button onClick={handleAddItem}>追加</button>
      <ul>
        {items.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => toggeleItem(item.id)}
            />
            {item.itemName}
          </div>
        ))}
      </ul>
      <button onClick={() => handleDeleteItem()}>削除</button>
    </div>
  );
};

export default BuyingList;
