import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ( { label, options, selected, onSelectedChange } ) => { 
    const [open, setOpen] = useState(false);
    const ref = useRef();

    //where ever i click print click not just dropdown
    useEffect(() => {
        const onBodyClick = (event) => {
                if(ref.current && ref.current.contains(event.target)){
                    return;
                }
                //console.log(event.target);
                setOpen(false);
                //manual document event handler gets called first then most child of react events then bubble up
                //console.log('body click');
        };
        
        document.body.addEventListener('click', onBodyClick);
        //empty array so it will only run once

        //clean up function
        return () => {
            //reomove onBodyEventListener on clean up
            document.body.removeEventListener('click', onBodyClick);
        }
    }, []);


    const renderedOptions = options.map((option) => {
        //this removes the selected option from the list
        if (option.value === selected.value){
            return null;
        }

        return (
            <div key={option.value} 
                className="item"
                onClick={() => {
                    console.log('Item clicked');
                    onSelectedChange(option);
                }}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                  onClick={() => {
                      console.log('Dropdown clicked');
                      setOpen(!open);
                    }} 
                  className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Dropdown;