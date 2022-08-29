export default async function moviesApi(){
    try {
        return await fetch('https://my-json-server.typicode.com/Jeck99/movies-api/movies')
        .then(res=>res.json())
    } catch (error) {
        
    }
}