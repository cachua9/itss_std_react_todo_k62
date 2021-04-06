/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
const handleClickCheckBox = (key) =>{
  const element = document.getElementById(key);
  element.style.color = 'grey'
}

function TodoItem( {item} ) {
  return (
    <label className="panel-block">
      <input type="checkbox" onclick={() => handleClickCheckBox(item.key)} />
      {item.text}
    </label>
  );
}

export default TodoItem;