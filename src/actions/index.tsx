//Action定義
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

//Action Creater(Action Createrを呼び出すことで、stateの更新が行われる)
export const increment = () =>({
    type : INCREMENT
});

export const decrement = () =>({
    type : DECREMENT
});

