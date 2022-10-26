/*
যেকোন বাগ ফিক্স করার স্ট্রাটেজি চারটা-

১. যে কাজটা করলে কোন এরর দেয় সেই কাজটা একাধিকবার করে করে দেখতে হবে , কোন কিছু বোঝা যাচ্ছে কিনা বা console এ গিয়ে দেখতে হবে কোন এরর আছে কিনা। সে এরর থেকে কোন হিন্টস বা clue খুঁজে বের করতে হবে। 

২. বাগটা কোথায় গিয়ে আটকাচ্ছে সেখান থেকে রিভার্স ওয়েতে সামনে এগুনো, তার আশেপাশে বা আগের লাইন এ ব্রেক পয়েন্ট দিয়ে, আগের কোডগুলো দেখে কোন কিছু সন্দেহ করা যায় কিনা। 

৩. পিছন থেকে শুরু করতে না পারলে বাগ কোথায় কি কাজ করলে বাগ হয় সেই কাজের শুরু থেকে শুরু করে সামনে এগুতে হবে। 

৪. ডিফারেন্ট এঙ্গেলে চিন্তা করার চেষ্টা করতে হবে, ধৈর্য্য থাকতে হবে। 
*/

/*
Debug steps:
1. Error check (error reproduce)
2. check others stuffs on the website 
3. check console for error
4. click on the link of the error (it will take you tothe code)
5. If needed add a breakpoint and try to stop the code over there and see the value 
6. if needed console log output 
7. seacrh full codeebase (ctrl + shift + F) > dont forget about partial match 
8. look around for typo
*/