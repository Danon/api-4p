import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function ToggleEnvironment(props) {
    const [environment, setEnvironment] = React.useState('prod');
    React.useEffect(() => setEnvironment(props.env), [props.env]);

    function handleEnvironment(event, newEnvironment) {
        if (newEnvironment) {
            setEnvironment(newEnvironment);
            props.onChange(newEnvironment);
        }
    }

    return <ToggleButtonGroup
        value={environment}
        onChange={handleEnvironment}
        size="small"
        exclusive>
        <ToggleButton value="local">Local</ToggleButton>
        <ToggleButton value="dev">Dev</ToggleButton>
        <ToggleButton value="prod">Prod</ToggleButton>
    </ToggleButtonGroup>;
}
