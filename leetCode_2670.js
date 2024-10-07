/**
 * @param {number[]} nums
 * @return {number[]}
 */
class freqMap {
    length = 0;
    elements = {}

    add(num){
        if(num in this.elements) this.elements[num] += 1
        else {
            this.elements[num] = 1
            this.length++;
        }
    }

    remove(num){
        if (num in this.elements) 
            if (this.elements[num] === 1){
                delete this.elements[num]
                this.length--;
            } else {
                this.elements[num] -= 1
            }
    }

    constructor(nums = []){
        nums.map((num,i) => { this.add(num) })
    }
}

var distinctDifferenceArray = function(nums) {
    const prefix = new freqMap()
    const suffix = new freqMap(nums)
    const diff = []

    for(let i = 0; i < nums.length; i++){
        suffix.remove(nums[i])
        prefix.add(nums[i])
        diff.push(prefix.length - suffix.length)
    }

    return diff
};