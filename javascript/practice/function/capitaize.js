function capitalize(word){
    const all_lower=word.toLowerCase();
    const capital=all_lower.charAt(0).toUpperCase()+all_lower.slice(1);

    console.log(capital);
}

capitalize('meharaj');

