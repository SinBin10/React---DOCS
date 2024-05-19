const product = [
  { name: "Cabbage", fruit: false, id: 1 },
  { name: "Mango", fruit: true, id: 2 },
  { name: "Spinach", fruit: false, id: 3 },
];

const fruits_list = () => {
    const listItems = product.map((item) => 
        (<li
          key={item.id}
          style={item.fruit === true ? { color: "green" } : { color: "magenta" }}
        >
          {item.name}
        </li>)
    );
    console.log(listItems);
  return (
    <ul>{listItems}</ul>
  )
}


export default fruits_list
