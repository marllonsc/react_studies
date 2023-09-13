let sports: String[] = ["Golf","Soccer","NBA","Tennis"];


for (let index = 0; index < sports.length; index++) {
    const element = sports[index];
    //console.log(element);
}

for (const one of sports) {
   if("Soccer" == one)
    console.log(one+ " My favorite sport!");
    else
    console.log(one);
}