var scores = [];
var scores2 = [];
var scores3 = [];

for (i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    scores.push(randomNumber);
};
for (i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    scores2.push(randomNumber);
};
for (i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    scores3.push(randomNumber);
};

var friendArray = [
    {
        "name": "Ellen",
        "photo": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6494472f-fec7-438d-b6fb-5c5122ed065e/da2ggiq-88fca511-6831-49ad-a829-721ba9416833.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0OTQ0NzJmLWZlYzctNDM4ZC1iNmZiLTVjNTEyMmVkMDY1ZVwvZGEyZ2dpcS04OGZjYTUxMS02ODMxLTQ5YWQtYTgyOS03MjFiYTk0MTY4MzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EdjGXYVwKT1zJLeep-jNeWY8WKowjczbmvCmyoXN3LY",
        "scores": scores
    },
    {
        "name": "Dorothy",
        "photo": "https://vignette.wikia.nocookie.net/warner-bros-entertainment/images/9/90/Dorothy_Gale.jpg/revision/latest/scale-to-width-down/310?cb=20170417134301",
        "scores": scores2
    },
    {
        "name": "Leia",
        "photo": "https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg",
        "scores": scores3
    }
];

module.exports = friendArray;