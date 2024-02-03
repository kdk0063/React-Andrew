
import { useState } from 'react';

import Dropdown from "../Components/Dropdown";

function DropdownPage() {
    const [selection, setSelection] = useState(null);

    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' }
    ];

    const handleSelect = (optionValue) => {
        setSelection(optionValue);
    };

    return (
        <div className="flex">
            <Dropdown
                options={options}
                value={selection}
                onChange={handleSelect}
            />
        </div>
    )
}

export default DropdownPage;