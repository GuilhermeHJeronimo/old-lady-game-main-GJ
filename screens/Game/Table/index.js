import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cell from './Cell';

const Table = ({ onCellClicked, tableState }) => {
    const renderRow = (start) => (
        <View style={styles.row}>
            {tableState.slice(start, start + 3).map((cellState, id) => (
                <Cell
                    key={id + start}
                    onClick={onCellClicked}
                    id={id + start}
                    cellState={cellState}
                />
            ))}
        </View>
    );

    return (
        <View style={styles.table}>
            {renderRow(0)}
            {renderRow(3)}
            {renderRow(6)}
        </View>
    );
}

const styles = StyleSheet.create({
    table: {
        width: 300,
        height: 300,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '33.33%',
    },
});

export default Table;
