class MergeSort {
    static sort(arr) {
        if (arr.length === 1) {
            return arr;
        }

        const end = arr.length;
        const mid = end / 2;
        const left = arr.slice(0, mid);
        const right = arr.slice(mid, end + 1);

        return MergeSort.merge(
            this.sort(left, 0, left.length),
            this.sort(right, 0, right.length)
        );
    }

    static merge(left, right) {
        let i = 0;
        let j = 0;
        const result = [];
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return i === left.length ?
            result.concat(right.slice(j, right.length)) :
            result.concat(left.slice(i, left.length));
    }
}