const { getInitials, createSlug, average, createSlug1, isPalindrome, createSlugEmpty, findPostById, addPost, removePost } = require("./refactoring");
const { afterEach } = require("jest-circus");


describe("Boolean Snack", () => {
    // test 1 

    test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
        expect(getInitials("Ciao")).toBe("C")
    })

    //test 2

    test("La funzione createSlug restituisce una stringa in lowercase.", () => {
        expect(createSlug("PAPERINO")).toBe("paperino")
    })

    //test 3

    test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
        expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5)
    })

    //test 4

    test("La funzione createSlug sostituisce gli spazi con -.", () => {
        expect(createSlug1("Ciao mondo come va")).toBe("Ciao-mondo-come-va")
    })

    //test 5
    test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
        expect(isPalindrome("radar")).toBe(true)
        expect(isPalindrome("cane")).toBe(false)
    })

    //test 6
    test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
        expect(() => createSlugEmpty("")).toThrow("Errore: il titolo non può essere vuoto o non valido");
        expect(() => createSlugEmpty(null)).toThrow("Errore: il titolo non può essere vuoto o non valido");
    })

    //test 7
    let posts;

    beforeEach(() => {
        posts = [
            {
                id: 1,
                title: "Introduzione a JavaScript",
                slug: "introduzione-a-javascript"
            },
            {
                id: 2,
                title: "Come usare le funzioni",
                slug: "come-usare-le-funzioni"
            },
            {
                id: 3,
                title: "Esercizi pratici con Jest",
                slug: "esercizi-pratici-con-jest"
            },
            {
                id: 4,
                title: "Creare uno slug da una stringa",
                slug: "creare-uno-slug-da-una-stringa"
            }
        ];
    })



    test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
        const result = findPostById(posts, 3)
        expect(result).toEqual({
            id: 3,
            title: "Esercizi pratici con Jest",
            slug: "esercizi-pratici-con-jest"
        })
        const result2 = findPostById(posts, 4)
        expect(result2.id).toBe(4)
    })

    //test 8
    test("Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più.", () => {
        addPost (posts, {
                id: 5,
                title: "Creare uno slug da una stringa 5",
                slug: "creare-uno-slug-da-una-stringa-5"
            })
        expect(posts).toHaveLength(5)
    })

    test("Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno.", () => {
        removePost(posts, 2);
        expect(posts).toHaveLength(3)
    })

});
