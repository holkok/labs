function fn() {
    const constObj = { name: 'Alice' };
    let letObj = { name: 'Bob' };

    constObj.name = 'Charlie';
    letObj.name = 'David';

    letObj = { name: 'Frank' };
}
