
const getWishListApplication = () => {
    const storedWishListApplication = localStorage.getItem('wishlists');

    if(storedWishListApplication){
        return JSON.parse(storedWishListApplication);
    }
    return [];
}

const saveWishListApplication = id => {

    const storedWishListApplications = getWishListApplication();
    const exists = storedWishListApplications.find(bookId => bookId === id);
    if(!exists){
        storedWishListApplications.push(id);
        localStorage.setItem('wishlists', JSON.stringify(storedWishListApplications))
    }

}

export {getWishListApplication, saveWishListApplication}