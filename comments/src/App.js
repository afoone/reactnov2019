import React from 'react';
import Comment from './Comment';
import faker from 'faker';

const App = () => {


    const mycomments = [
        {
        img: faker.image.avatar(),
        name: faker.name.firstName(),
        time: faker.date.past().toLocaleDateString(),
        comment: faker.lorem.sentence()
    },
    {
        img: faker.image.avatar(),
        name: faker.name.firstName(),
        time: faker.date.past().toLocaleDateString(),
        comment: faker.lorem.sentence()
    },
    {
        img: faker.image.avatar(),
        name: faker.name.firstName(),
        time: faker.date.past().toLocaleDateString(),
        comment: faker.lorem.sentence()
    },
    {
        img: faker.image.avatar(),
        name: faker.name.firstName(),
        time: faker.date.past().toLocaleDateString(),
        comment: faker.lorem.sentence()
    },

]


    return (
        <div className="app">
            <div class="ui comments">
                {
                    mycomments.map( item => <Comment comment={item}></Comment>)
                }
                
            </div>
        </div>
    );
}

export default App;