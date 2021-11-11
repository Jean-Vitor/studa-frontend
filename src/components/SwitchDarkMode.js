import React, { useState } from 'react'
import { Switch } from 'react-native-switch'

export default () => {
    const [isEnabled, setEnabled] = useState(false)
    const toggleSwitch = () => setEnabled(previousState => !previousState)

    return (
        <Switch
            containerStyle={{marginRight:20}}
            onValueChange={toggleSwitch}
            value={isEnabled}
            barHeight={32}
            circleSize={25}
            circleBorderWidth={0}
            circleActiveColor={'rgba(255, 255, 255, 1)'}
            circleInActiveColor={'rgba(255, 255, 255, 1)'}
            backgroundActive={'rgba(255, 255, 255, .3)'}
            backgroundInactive={'rgba(255, 255, 255, .3)'}
            renderActiveText={false}
            renderInActiveText={false}
            switchLeftPx={1.2}
            switchRightPx={1.2}
            switchWidthMultiplier={3}
        />
    )
}