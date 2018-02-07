import React from 'react';

import {
    List,
    ListItem,
    Left,
    Thumbmail,
    Right,
    Body,
    Text
} from 'native-base';

const PaisList = (props) => (
    <List style={{ marginTop: 10 }}>
        { props.listpaises.map( pais => (
            <ListItem avatar key={ pais.id }>
                <Left>
                    <Thumbmail source={{ uri: pais.owner.avatar_url }} />
                </Left>

                <Body>
                    <Text> {pais.full_name} </Text>
                    <Text note> {pais.description} </Text>
                </Body>
                <Right>
                    <Text note> {pais.stargazes_count} stars </Text>
                </Right>
            </ListItem>
        ) } }
    </List>
);

export default PaisList;