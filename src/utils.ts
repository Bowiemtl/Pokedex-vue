const getColorForType = (type: string): string => {
    const types = {
        "normal": '#A9A878',
        "fighting": '#C13129',
        "flying": '#98A4E0',
        "poison": '#BD5CA1',
        "ground": '#E7D4A9',
        "rock": '#BEA563',
        "bug": '#A9BD42',
        "ghost": '#6762B2',
        "steel": '#B2ACBD',
        "fire": '#FE4833',
        "water": '#1F93F6',
        "grass": '#74D76A',
        "electric": '#FDC745',
        "psychic": '#FE71A3',
        "ice": '#47CEE4',
        "dragon": '#8567ED',
        "dark": '#765B4A',
        "fairy": '#FDB6F2',
    }

    // @ts-ignore FIXME: look into this
    return types[type] ?? '#356abc';
}

export { getColorForType };