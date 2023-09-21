import React from 'react';
import { useNavigation } from '@react-navigation/native';

const navigationPage = (Component) => {
    return (props) => {
        const navigation = useNavigation()

        return <Component navigation={navigation} {...props} />
    }
}

export default navigationPage;