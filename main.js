// ACTIONS
const addAction = {
    type: 'ADD',
};

const addTenAction = {
    type: 'ADDTEN',
};

const removeAction = {
    type: 'REMOVE',
};

const removeTenAction = {
    type: 'REMOVETEN',
};

const resetAction = {
    type: 'RESET',
}

// REDUCER
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'ADDTEN':
            return state + 10;
        case 'REMOVE':
            return state - 1;
        case 'REMOVETEN':
            return state - 10;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}

// STORE
const { createStore } = Redux;
const store = createStore(counterReducer);

// MAIN
const renderStore = document.getElementById('render-store');
const render = () => {
    renderStore.innerHTML = store.getState();
}

store.subscribe(render);
render();

const add = document.getElementById('add');
add.addEventListener('click', () => {
    store.dispatch(addAction)
});

const addTen = document.getElementById('addTen');
addTen.addEventListener('click', () => {
    store.dispatch(addTenAction)
});

const remove = document.getElementById('remove');
remove.addEventListener('click', () => {
    store.dispatch(removeAction)
});

const removeTen = document.getElementById('removeTen');
removeTen.addEventListener('click', () => {
    store.dispatch(removeTenAction)
});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    store.dispatch(resetAction)
});