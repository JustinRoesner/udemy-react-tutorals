import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';


const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework',
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS libaray among engineers',

    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components',
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }
];

export default () => {
    //options[0] is the default state
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <div>
                <Header />
                <Route path="/">
                    <Accordion items={items} />
                </Route>

                <Route path="/list">
                    <Search />
                </Route>

                <Route path="/dropdown">
                    <Dropdown 
                        label="Select a color"
                        options={options}
                        selected={selected}
                        onSelectedChange={setSelected}
                    />
                </Route>

                <Route path="/translate">
                    <Translate />
                </Route>

            </div>
        </div>
    );
};
