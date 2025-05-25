let results = Array.from({length: 21}, (x, i) => 0);

for (let i = 1; i <= 20; i++) {
    for (let j = 1; j <= 20; j++) {
        for (let k = 0; k <= 1; k++) {
            let dif1 = Math.abs(i - 10.5);
            let dif2 = Math.abs(j - 10.5);

            if (dif1 > dif2) {
                results[i]++;
            } else if (dif2 > dif1) {
                results[j]++;
            } else if (k === 0) {
                results[Math.min(i, j)]++;
            } else {
                results[Math.max(i, j)]++;
            }
        }
    }
}

for (let i = 1; i < results.length; i++) {
    console.log(i + ": " + results[i] / 8.0);
}
