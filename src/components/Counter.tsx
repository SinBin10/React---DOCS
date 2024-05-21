interface Props{
    count: number;
    onClick: ()=>void;
}

function Timer({ count, onClick }: Props) {
    return (
      <button onClick={onClick}>Click Me {count}</button>
    );
}

export default Timer;