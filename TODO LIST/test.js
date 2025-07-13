
function addJokes(items) {

    let div=document.createElement('div');
    div.innerHTML=items
    document.body.append(div)
}
function displayJokes() {
    const items=[  "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the bicycle fall over? Because it was two-tired!",
        "What do you call fake spaghetti? An impasta!",
        "Why do seagulls fly over the ocean? Because if they flew over the bay, they'd be bagels!",
        "Why did the math book look sad? Because it had too many problems!"
    ];
    let currentIndex=localStorage.getItem(`currentJokeIndex`)
    if(currentIndex==null) {
        currentIndex=0;
    }
    else {
        currentIndex=(parseInt(currentIndex)+1) % items.length
    }
    addJokes(items[currentIndex]);
    localStorage.setItem(`currentJokeIndex`,currentIndex);
    }

displayJokes();