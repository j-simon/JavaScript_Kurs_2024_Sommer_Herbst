// --
function handleClear(e) {
    e.preventDefault();
    e.target.blur();

    store.dispatch('CLEAR');
}// ---
