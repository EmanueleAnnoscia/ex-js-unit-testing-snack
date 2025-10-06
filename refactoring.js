function getInitials(name){
    const firstLetter = name[0]
    return firstLetter;
}

function createSlug(str){
    return str.toLowerCase();
}

function average(arr){
    if(arr.length < 1){
        return;
    }
    return arr.reduce((prev, current) => prev + current) / arr.length
};

function createSlug1(str){
    return str.replaceAll(" ", "-")

}

function isPalindrome(str){
    let j = str.length-1
    for(let i = 0; i< str.length / 2; i++){
        if(str[i] != str[j]){
            return false;
        }
        j--;
    }
    return true
}

function createSlugEmpty(title){
    if(title === "" || title === null){
        throw new Error("Errore: il titolo non può essere vuoto o non valido");
    }else
        return title 
    
}


function findPostById(posts, id){
    return posts.find(post => post.id === id);
}

function addPost(posts, post){
    posts.push(post)
}

function removePost(posts, id){
    const index = posts.findIndex(p => p.id === id)
    posts.splice(index, 1)
}

module.exports = { getInitials,
    createSlug,
    average,
    createSlug1,
    isPalindrome,
    createSlugEmpty,
    findPostById,
    addPost,
    removePost
 };