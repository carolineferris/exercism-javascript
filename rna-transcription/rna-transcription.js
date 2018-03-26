const DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = dnaStrand => {
    const alertMap = alert => mapping => element => {
        if(!!mapping[element]){ return mapping[element]; }
        throw new Error(alert);
    }

    const dnaToRnaMapping = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U',
    };

    const alertDnaToRnaMap = alertMap('Invalid input')(dnaToRnaMapping);

    const rnaStrand = dnaStrand.split('')
        .map(alertDnaToRnaMap)
        .join('');
    return rnaStrand;
}

module.exports = DnaTranscriber;