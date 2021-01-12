class InsertionSort {
    static sort(arr) {
        // if (!arr) {
        //     console.log('Please pass an array as the parameter.');
        //     return;
        // }

        let i = 1;
        // start from the second element and go up to the last.
        while (i < arr.length) {
            const key = arr[i];
            let j = i - 1;

            // if key is less than its previous element swap key's position with its previous element.
            while (j >= 0 && key < arr[j]) {
                arr[j + 1] = arr[j];
                arr[j] = key;
                j--;
            }
            i++;
        }
    }
}