function oddAverage(numbers) {
    let sum = 0; // অড সংখ্যাগুলোর যোগফল রাখতে একটি ভেরিয়েবল
    let count = 0; // অড সংখ্যাগুলোর সংখ্যা রাখতে আরেকটি ভেরিয়েবল

    // লুপের মাধ্যমে প্রতিটি সংখ্যা চেক করব
    for (const number of numbers) {
        if (number % 2 === 1) { // যদি সংখ্যা অড হয়
            sum += number; // অড সংখ্যাটি যোগ করব
            count++; // অড সংখ্যা গুনব
        }
    }

    // যদি কোনো অড সংখ্যা পাওয়া যায়
    if (count > 0) {
        return sum / count; // গড় বের করব (যোগফল ÷ সংখ্যা)
    } else {
        return 0; // কোনো অড সংখ্যা না পেলে ০ রিটার্ন করব
    }
}

// বিজোড় সংখ্যাগুলোর গড় বের করার জন্য নম্বরের একটি অ্যারে
const numbers = [42, 13, 58, 65, 81, 96, 77];
const avg = oddAverage(numbers); // ফাংশন কল করে গড় বের করা
console.log("Average of the odd numbers is:", avg);